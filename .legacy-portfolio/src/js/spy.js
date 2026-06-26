/**
 * FCAnalytics — Advanced Portfolio Spy System v2
 * Tracks: per-page visits, time-on-page, scroll depth, clicks, referrer, device, UTM
 * Storage: localStorage key 'fc_analytics_v2'
 */

const FCAnalytics = (() => {
    const STORAGE_KEY = 'fc_analytics_v2';
    const MAX_VISITS_PER_PAGE = 200;
    const MAX_SECURITY_EVENTS = 500;

    /* ── helpers ─────────────────────────────────────────────────── */
    function getDB() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : { pages: {}, security: [], globalInteractions: 0 };
        } catch { return { pages: {}, security: [], globalInteractions: 0 }; }
    }

    function saveDB(db) {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(db)); } catch { /* quota full */ }
    }

    function getPageName() {
        const path = window.location.pathname;
        const name = path.split('/').pop().replace('.html', '') || 'index';
        return name === '' ? 'index' : name;
    }

    function detectDevice() {
        const ua = navigator.userAgent;
        if (/Mobi|Android/i.test(ua)) return 'mobile';
        if (/Tablet|iPad/i.test(ua)) return 'tablet';
        return 'desktop';
    }

    function getUTM() {
        const params = new URLSearchParams(window.location.search);
        return {
            source: params.get('utm_source') || null,
            medium: params.get('utm_medium') || null,
            campaign: params.get('utm_campaign') || null
        };
    }

    /* ── session state ───────────────────────────────────────────── */
    const sessionState = {
        pageName: getPageName(),
        startTime: Date.now(),
        maxScroll: 0,
        clicks: 0
    };

    /* ── scroll tracker ──────────────────────────────────────────── */
    function trackScroll() {
        let ticking = false;
        const updateMax = () => {
            const docH = Math.max(document.body.scrollHeight, 1);
            const scrolled = window.scrollY + window.innerHeight;
            const pct = Math.round((scrolled / docH) * 100);
            if (pct > sessionState.maxScroll) sessionState.maxScroll = Math.min(pct, 100);
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateMax);
                ticking = true;
            }
        }, { passive: true });

        updateMax();
    }

    /* ── click tracker ───────────────────────────────────────────── */
    function trackClicks() {
        document.addEventListener('click', () => {
            sessionState.clicks++;
            const db = getDB();
            db.globalInteractions = (db.globalInteractions || 0) + 1;
            saveDB(db);
        });
    }

    /* ── visit recorder ──────────────────────────────────────────── */
    function recordVisit() {
        const db = getDB();
        const page = sessionState.pageName;
        if (!db.pages[page]) db.pages[page] = { visits: [], totalTimeMs: 0, totalScrollDepth: 0, visitCount: 0 };

        const visit = {
            id: Math.random().toString(36).slice(2, 10),
            ts: new Date().toISOString(),
            referrer: document.referrer || 'Direct',
            device: detectDevice(),
            screenSize: `${window.screen.width}x${window.screen.height}`,
            language: navigator.language,
            utm: getUTM(),
            timeMs: 0,          // filled on beforeunload
            scrollDepth: 0,     // filled on beforeunload
            clicks: 0           // filled on beforeunload
        };

        db.pages[page].visits.unshift(visit);
        if (db.pages[page].visits.length > MAX_VISITS_PER_PAGE) {
            db.pages[page].visits.pop();
        }
        db.pages[page].visitCount = (db.pages[page].visitCount || 0) + 1;

        // store the visit id so we can update it on leave
        sessionState.visitId = visit.id;
        saveDB(db);
    }

    /* ── update visit on page leave ──────────────────────────────── */
    function finalizeVisit() {
        const db = getDB();
        const page = sessionState.pageName;
        if (!db.pages[page]) return;

        const timeMs = Date.now() - sessionState.startTime;
        const visit = db.pages[page].visits.find(v => v.id === sessionState.visitId);
        if (visit) {
            visit.timeMs = timeMs;
            visit.scrollDepth = sessionState.maxScroll;
            visit.clicks = sessionState.clicks;
        }

        // rolling averages
        const pageData = db.pages[page];
        pageData.totalTimeMs = (pageData.totalTimeMs || 0) + timeMs;
        pageData.totalScrollDepth = (pageData.totalScrollDepth || 0) + sessionState.maxScroll;
        saveDB(db);
    }

    /* ── security event logger ───────────────────────────────────── */
    function logSecurity(type, severity, details = {}) {
        const db = getDB();
        const event = {
            id: Math.random().toString(36).slice(2, 10),
            ts: new Date().toISOString(),
            type,
            severity, // 'LOW' | 'MEDIUM' | 'HIGH'
            page: getPageName(),
            url: window.location.href,
            details
        };
        db.security.unshift(event);
        if (db.security.length > MAX_SECURITY_EVENTS) db.security.pop();
        saveDB(db);
        console.warn(`[SEC] ${type} | ${severity}`, details);
    }

    /* ── security listeners ──────────────────────────────────────── */
    function initSecurityListeners() {
        // DevTools heuristic (size gap)
        let dtOpen = false;
        const checkDT = () => {
            const gap = window.outerHeight - window.innerHeight > 160 ||
                window.outerWidth - window.innerWidth > 160;
            if (gap && !dtOpen) { dtOpen = true; logSecurity('DevToolsOpen', 'MEDIUM', { page: getPageName() }); }
            if (!gap) dtOpen = false;
        };
        setInterval(checkDT, 3000);
        window.addEventListener('resize', checkDT);

        // Copy / print
        document.addEventListener('copy', () => {
            const sel = window.getSelection()?.toString().slice(0, 50) || '';
            logSecurity('ContentCopy', 'LOW', { preview: sel });
        });
        window.addEventListener('beforeprint', () => logSecurity('PagePrint', 'MEDIUM'));

        // Suspicious input (script injection attempt)
        document.addEventListener('input', (e) => {
            const val = (e.target?.value || '').toLowerCase();
            if (val.includes('<script') || val.includes('javascript:') || val.includes('onerror=')) {
                logSecurity('XSSAttempt', 'HIGH', { field: e.target?.name || 'unknown' });
            }
        });

        // Rate limit clicks > 30 / 5s
        let clickBurst = 0;
        setInterval(() => { clickBurst = 0; }, 5000);
        document.addEventListener('click', () => {
            clickBurst++;
            if (clickBurst > 30) logSecurity('ClickFlood', 'MEDIUM', { count: clickBurst });
        });
    }

    /* ── public API ──────────────────────────────────────────────── */
    function init() {
        // Developer opt-out check to avoid polluting analytics during build/test
        if (localStorage.getItem('fc_dev_mode') === 'true') {
            console.info('[FCAnalytics] Dev mode active. Tracking disabled.');
            return;
        }

        recordVisit();
        trackScroll();
        trackClicks();
        initSecurityListeners();

        // Finalize when user leaves
        window.addEventListener('beforeunload', finalizeVisit);
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') finalizeVisit();
        });
    }

    function getData() { return getDB(); }

    function clearAll() {
        localStorage.removeItem(STORAGE_KEY);
    }

    function exportJSON() {
        const blob = new Blob([JSON.stringify(getDB(), null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `fc_analytics_${Date.now()}.json`;
        a.click();
    }

    function exportCSV() {
        const db = getDB();
        const rows = [['page', 'visit_id', 'timestamp', 'referrer', 'device', 'screen', 'timeMs', 'scrollDepth', 'clicks', 'utm_source']];
        Object.entries(db.pages).forEach(([page, data]) => {
            data.visits.forEach(v => {
                rows.push([page, v.id, v.ts, v.referrer, v.device, v.screenSize, v.timeMs, v.scrollDepth, v.clicks, v.utm?.source || '']);
            });
        });
        const csv = rows.map(r => r.join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `fc_analytics_${Date.now()}.csv`;
        a.click();
    }

    return { init, getData, clearAll, exportJSON, exportCSV, logSecurity };
})();

// Auto-init
document.addEventListener('DOMContentLoaded', () => FCAnalytics.init());
window.FCAnalytics = FCAnalytics;

export default FCAnalytics;
