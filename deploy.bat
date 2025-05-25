@echo off
echo 🧹 Nettoyage node_modules & dist...
rd /s /q node_modules
del package-lock.json
rd /s /q dist

echo 📦 Réinstallation des dépendances...
npm install

echo 🛠️ Build de production...
npm run build

echo 🚀 Déploiement GitHub Pages...
npx gh-pages -d dist

echo ✅ Terminé !
pause
