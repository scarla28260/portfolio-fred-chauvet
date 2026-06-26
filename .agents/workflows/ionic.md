---
description: ionic
---

# agent-ionic-antigravity.ps1
Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Write-Host "1) Vérifier Node et npm"
node -v
npm -v

Write-Host "2) Vérifier ionic CLI, installer si absent"
try {
  ionic -v | Out-Null
  Write-Host "ionic déjà installé"
} catch {
  Write-Host "Installation globale de @ionic/cli"
  npm install -g @ionic/cli
  # Mettre à jour PATH si nécessaire
  $npmGlobal = npm bin -g
  if (-not ($env:PATH -split ";" | Where-Object { $_ -eq $npmGlobal })) {
    Write-Host "Ajout du dossier npm global au PATH pour la session et au profil utilisateur"
    setx PATH "$($env:PATH);$npmGlobal" | Out-Null
    $env:PATH += ";" + $npmGlobal
  }
}

Write-Host "3) Installer dépendances du projet"
npm ci

Write-Host "4) S'assurer que capacitor.config.json existe et contient appId/appName"
$configPath = Join-Path (Get-Location) "capacitor.config.json"
if (-not (Test-Path $configPath)) {
  Write-Host "Création d'un capacitor.config.json minimal"
  $cfg = @{
    appId = "com.votreentreprise.monapp"
    appName = "MonApp"
    webDir = "www"
  } | ConvertTo-Json -Depth 4
  $cfg | Out-File -Encoding UTF8 $configPath
} else {
  $cfgText = Get-Content $configPath -Raw
  if ($cfgText -notmatch '"appId"\s*:\s*".+?"') {
    Write-Host "Ajout d'un appId par défaut dans capacitor.config.json"
    $json = (Get-Content $configPath -Raw) | ConvertFrom-Json
    $json.appId = "com.votreentreprise.monapp"
    $json.appName = $json.appName -or "MonApp"
    $json.webDir = $json.webDir -or "www"
    $json | ConvertTo-Json -Depth 4 | Out-File -Encoding UTF8 $configPath
  }
}

Write-Host "5) Build web assets"
ionic build

Write-Host "6) Sync Capacitor"
npx cap sync

Write-Host "7) Installer la plateforme Android si manquante"
# Vérifier si @capacitor/android est installé
$pkgJson = Join-Path (Get-Location) "package.json"
$hasAndroidPkg = $false
if (Test-Path $pkgJson) {
  $pkg = Get-Content $pkgJson -Raw | ConvertFrom-Json
  if ($pkg.dependencies.'@capacitor/android' -or $pkg.devDependencies.'@capacitor/android') { $hasAndroidPkg = $true }
}
if (-not $hasAndroidPkg) {
  Write-Host "Installation de @capacitor/android"
  npm install @capacitor/android --save
}

# Ajouter la plateforme Android si nécessaire
try {
  npx cap ls | Out-Null
  if (-not (npx cap ls | Select-String -Pattern "android")) {
    npx cap add android
  } else {
    Write-Host "Platform android déjà ajoutée"
  }
} catch {
  npx cap add android
}

Write-Host "8) Ouvrir le projet Android dans Android Studio"
npx cap open android

Write-Host "Agent terminé"

