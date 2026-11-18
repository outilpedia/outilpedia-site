# Outilpedia

Site de tests et comparatifs d'outils pour créer et gagner en ligne : https://outilpedia.com

Site statique Astro, hébergé sur Cloudflare Workers (static assets, configuration dans `wrangler.jsonc`). Chaque modification poussée sur `main` est publiée automatiquement.

## Ajouter un article

Créer un fichier Markdown dans `src/pages/articles/`, par exemple `avis-systeme-io.md`. Il sera publié à l'adresse `/articles/avis-systeme-io/` :

```markdown
---
layout: ../../layouts/Article.astro
title: "Avis Systeme.io : test complet"
description: "Une phrase de 150 caractères maximum, affichée dans Google."
category: vendre-en-ligne
date: 2026-11-20
draft: false
---

Contenu de l'article...
```

Catégories possibles (fichier `src/data/site.js`) : `creer-son-site`, `video-et-ia`, `vendre-en-ligne`, `marketing-et-seo`, `securite-et-outils-pratiques`.

L'article apparaît automatiquement sur l'accueil, dans sa catégorie et dans la Boîte à outils. `draft: true` le garde hors ligne.

## Règles éditoriales

- Signature : « La rédaction Outilpedia ». Aucun nom personnel.
- Chaque article répond à une vraie question, montre un usage réel et cite les défauts de l'outil.
- Liens affiliés avec `rel="sponsored nofollow"`.

## À compléter avant la mise en ligne publique

- `src/pages/mentions-legales.astro` : identité de l'éditeur.
- Adresse `contact@outilpedia.com` : à créer avec le routage d'emails de Cloudflare, vers affiliation.fw@gmail.com.

## Commandes

```sh
npm install
npm run dev     # aperçu local
npm run build   # génère le site dans dist/
```

Réglages Cloudflare (Workers Builds) : commande de build `npm run build`, commande de déploiement `npx wrangler deploy`.
