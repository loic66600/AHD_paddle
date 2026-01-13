# AHD Paddle

Site vitrine AHD Paddle propulsé par Astro 4, Tailwind CSS et Porsche Design System.

## Prérequis

- Node.js 18 ou version ultérieure
- npm (fourni avec Node.js)
- Facultatif : Docker et Docker Compose

## Installation

1. Cloner ce dépôt :
   ```bash
   git clone git@github.com:loic66600/AHD_paddle.git
   cd AHD_paddle
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```

## Démarrer le site en local

```bash
npm run dev
```

- Ouvre ensuite http://localhost:4321.
- Les changements sont rechargés à chaud par Astro.

## Autres scripts npm

- `npm run build` : génère la version statique dans `dist/`.
- `npm run preview` : sert la version buildée pour un test de production local.

## Utilisation avec Docker

```bash
docker compose up --build
```

Le site est alors disponible sur http://localhost:4321 et se met à jour automatiquement lors des modifications de fichiers.

## Déploiement

1. Construire le site :
   ```bash
   npm run build
   ```
2. Déployer le contenu du dossier `dist/` sur l’hébergement statique de votre choix (Netlify, Vercel, GitHub Pages, etc.).

## Structure

- `src/` : composants Astro, pages et styles.
- `public/` : médias servis tels quels (images, vidéos).
- `astro.config.mjs` : configuration Astro.
- `tailwind.config.ts` : configuration Tailwind CSS.

## Support

Pour toute question, créer une issue sur GitHub ou contacter l’équipe AHD Paddle.
