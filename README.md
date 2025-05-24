
# ROFEX (Bêta)

Ce dépôt contient la version bêta de **ROFEX / ROFEX**, une plateforme B2B de mise en relation entre techniciens certifiés et clients professionnels.

## 🧱 Stack technique

- Frontend : React (Vite) + TypeScript
- Styling : Tailwind CSS
- Auth & DB : Supabase
- Routing : React Router
- State : React Query

## 🚀 Lancer le projet localement

```bash
# Cloner le projet
git clone https://github.com/ton-user/rofex.git
cd rofex

# Installer les dépendances
npm install

# Ajouter un fichier .env.local avec :
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...

# Lancer le serveur
npm run dev
```

## 🔐 Authentification

L'app utilise Supabase Auth pour gérer les connexions via e-mail/mot de passe. Le rôle (client / technicien) est stocké dans une table `profils`.

## 🧠 Structure des dossiers

- `src/pages/` – Pages du site
- `src/components/` – Composants UI
- `src/contexts/` – Contexte d'authentification
- `src/supabase.js` – Connexion au backend Supabase

---

© 2025 ROFEX / ROFEX
