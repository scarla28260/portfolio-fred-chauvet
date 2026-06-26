'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WebcamPixelGrid } from '@/components/ui/webcam-pixel-grid';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc?: string;
  bgVideoSrc?: string;
  useWebcamBackground?: boolean;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  bgVideoSrc,
  useWebcamBackground,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Track scroll progress of the main wrapper container (throttled internally by Framer Motion via requestAnimationFrame)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Calculate values using transforms mapped to scroll progress
  // Hero expands from 0 to 0.85 progress. Beyond that it stays full screen.
  const startWidth = isMobile ? '80vw' : '35vw';
  const startHeight = isMobile ? '50vh' : '65vh';

  const mediaWidth = useTransform(scrollYProgress, [0, 0.85], [startWidth, '100vw']);
  const mediaHeight = useTransform(scrollYProgress, [0, 0.85], [startHeight, '100vh']);
  const borderRadius = useTransform(scrollYProgress, [0, 0.85], ['24px', '0px']);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  
  // Title splits and fades out as video expands
  const textTranslateXLeft = useTransform(scrollYProgress, [0, 0.75], ['0vw', '-60vw']);
  const textTranslateXRight = useTransform(scrollYProgress, [0, 0.75], ['0vw', '60vw']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const scrollPromptOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div className='w-full'>
      {/* ── STICKY HERO CONTAINER ── */}
      <div
        ref={containerRef}
        className='relative w-full h-[220vh] bg-background z-10'
      >
        <div className='sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center'>
          
          {/* Ambient background fading out */}
          <motion.div
            className='absolute inset-0 z-0 h-full w-full'
            style={{ opacity: bgOpacity }}
          >
            {useWebcamBackground ? (
              <div className='absolute inset-0 z-0 opacity-50 mix-blend-screen'>
                <WebcamPixelGrid
                  colorMode="monochrome"
                  monochromeColor="#0284C7"
                  backgroundColor="transparent"
                  className="w-full h-full"
                />
                <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background pointer-events-none' />
                <div className='absolute inset-0 bg-aura-ocean/20 mix-blend-overlay pointer-events-none' />
              </div>
            ) : bgVideoSrc ? (
              <>
                <video
                  src={bgVideoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className='w-screen h-screen object-cover opacity-60 blur-[2px]'
                />
                <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]' />
                <div className='absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background' />
                <div className='absolute inset-0 bg-aura-ocean/20 mix-blend-overlay' />
              </>
            ) : bgImageSrc ? (
              <div className='relative w-full h-full'>
                <Image
                  src={bgImageSrc}
                  alt='Background'
                  fill
                  className='object-cover opacity-60'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background' />
              </div>
            ) : null}
            <div className='absolute inset-0 bg-black/10' />
          </motion.div>

          {/* Central expanding media */}
          <motion.div
            className='absolute z-10 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)]'
            style={{
              width: mediaWidth,
              height: mediaHeight,
              borderRadius: borderRadius,
              maxWidth: '100vw',
              maxHeight: '100vh',
            }}
          >
            {mediaType === 'video' ? (
              mediaSrc.includes('youtube.com') ? (
                <div className='relative w-full h-full pointer-events-none'>
                  <iframe
                    width='100%'
                    height='100%'
                    src={
                      mediaSrc.includes('embed')
                        ? mediaSrc +
                          (mediaSrc.includes('?') ? '&' : '?') +
                          'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                        : mediaSrc.replace('watch?v=', 'embed/') +
                          '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                          mediaSrc.split('v=')[1]
                    }
                    className='w-full h-full'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  />
                  <div className='absolute inset-0 bg-black/30' />
                </div>
              ) : (
                <div className='relative w-full h-full pointer-events-none'>
                  <div className='absolute inset-0 bg-gradient-to-tr from-aura-ocean/10 to-aura-gold/10 z-10 mix-blend-overlay' />
                  <video
                    src={mediaSrc}
                    poster={posterSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload='auto'
                    className='w-full h-full object-cover scale-[1.02]'
                    controls={false}
                    disablePictureInPicture
                    disableRemotePlayback
                  />
                  <div className='absolute inset-0 bg-black/20 z-10' />
                </div>
              )
            ) : (
              <div className='relative w-full h-full'>
                <Image
                  src={mediaSrc}
                  alt={title || 'Media content'}
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-black/30' />
              </div>
            )}
          </motion.div>

          {/* Splitting Title */}
          <div
            className={`flex items-center justify-center text-center gap-2 md:gap-4 w-full relative z-20 transition-none flex-col md:flex-row pointer-events-none ${
              textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
            }`}
          >
            <motion.h2
              className='text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tighter leading-none uppercase italic font-syne'
              style={{ x: textTranslateXLeft, opacity: textOpacity }}
            >
              {firstWord}
            </motion.h2>
            <motion.h2
              className='text-5xl md:text-7xl lg:text-8xl text-aura-gold not-italic font-black tracking-tighter leading-none uppercase font-syne'
              style={{ x: textTranslateXRight, opacity: textOpacity }}
            >
              {restOfTitle}
            </motion.h2>
          </div>

          {/* Subtitles & Scroll Prompt */}
          <motion.div
            className='absolute bottom-12 flex flex-col items-center text-center z-20 pointer-events-none'
            style={{ opacity: scrollPromptOpacity }}
          >
            {date && (
              <p className='text-xs font-black uppercase tracking-[0.5em] text-aura-gold/80 italic font-mono mb-4'>
                {date}
              </p>
            )}
            {scrollToExpand && (
              <div className='flex flex-col items-center'>
                <p className='text-[10px] font-bold tracking-[0.3em] uppercase text-white/80 animate-pulse'>
                  {scrollToExpand}
                </p>
                <div className='w-[1px] h-10 bg-gradient-to-b from-white/50 to-transparent mt-3' />
              </div>
            )}
          </motion.div>

        </div>
      </div>

      {/* ── REST OF CONTENT (Scrolls naturally after) ── */}
      <div className='relative z-20 bg-background w-full'>
        {children}
      </div>
    </div>
  );
};

export default ScrollExpandMedia;
