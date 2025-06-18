# Linko - PWA / App Mobile et Bracelet connecté

## 💻 Démo en ligne

➡️[https://linko-flame.vercel.app/](https://linko-flame.vercel.app/)⬅️

![Bannière](public/assets/images/carte-de-visite-banner.png)

![Projet](https://img.shields.io/badge/Projet-Fictif-0162EF?style=for-the-badge)
![Type](https://img.shields.io/badge/Type-PWA--Mobile-CC5C00?style=for-the-badge)
![Statut](https://img.shields.io/badge/Statut-En%20cours-FFBF33?style=for-the-badge)

## Table des matières

1. [Équipe](#1-équipe)
2. [Fonctionnalités](#2-fonctionnalités)
3. [Stack technique](#3-stack-technique)
4. [Lancer le projet](#4-lancer-le-projet)
5. [Modèle Conceptuel des Données (MCD)](#5-modèle-conceptuel-des-données-mcd)
6. [Proposition de fonctionnalité](#6-proposition-de-fonctionnalité)
7. [Remarques](#7-remarques)
8. [Références](#8-références)

## ✨ 1. Notre équipe

- **Boisneau Ysée** : Présence & Marketing Digital
- **Jaunasse Cali** : Webmarketing & Social Média
- **Lebehot Mathéo** : Webdesign - UX/UI
- **Ploteau Arthur** : Graphiste - Designer
- **Ratelade Oriane** : Développeuse

## 📜 2. Description

Dans les **milieux scolaires**, **parascolaires**, ou encore les **colonies**, la sécurité et la
coordination lors des déplacements sont des enjeux cruciaux. En effet, les encadrants
doivent surveiller de nombreux enfants en même temps, et parfois certains
s’éloignent ou se perdent, ce qui provoque du stress et de l’inquiétude, à la fois chez
les encadrants, les professeurs et aussi les parents.

Notre projet est donc né afin de répondre à cette problématique : **assurer la sécurité**,
**superviser les plus jeunes en déplacement**. Notre solution ne vise pas la surprotection,
nous proposons une solution fiable et intuitive, afin de simplifier le travail des
encadrants mais aussi garantir la sécurité des plus petits.

## 🚀 2. Stack technique

| Catégorie       | Technologie                                                                                                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Langage         | ![Javascript](https://img.shields.io/badge/Javascript-000000?style=for-the-badge&logo=javascript&logoColor=F7DF1E)                                                                                           |
| Framework (PWA) | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=ffffff)                                                                                                    |
| App (futur)     | ![ReactNative](https://img.shields.io/badge/React%20Native-000000?style=for-the-badge&logo=react&logoColor=61DAFB)                                                                                           |
| Backend         | ![Supabase](https://img.shields.io/badge/Supabase-000000?style=for-the-badge&logo=supabase&logoColor=3FCF8E)                                                                                                 |
| Auth            | ![SupabaseAuth](https://img.shields.io/badge/Supabase%20Auth-000000?style=for-the-badge&logo=supabase&logoColor=3FCF8E)                                                                                      |
| CI/CD           | ![Github](https://img.shields.io/badge/Github-000000?style=for-the-badge&logo=github&logoColor=ffffff)![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=ffffff) |
| UI              | ![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-000000?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4)                                                                                        |

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
linko-react-pwa
├─ jsconfig.json
├─ next.config.mjs
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ assets
│  │  ├─ fonts
│  │  │  ├─ grenadine
│  │  │  └─ mundial
│  │  └─ images
│  └─ manifest.json
├─ README.md
├─ src
│  ├─ app
│  │  ├─ account/
│  │  ├─ alerts/
│  │  ├─ auth/
│  │  ├─ conditions-generales-d-utilisation/
│  │  ├─ conditions-generales-de-vente/
│  │  ├─ create-profile/
│  │  ├─ favicon.ico
│  │  ├─ foire-aux-questions/
│  │  ├─ globals.css
│  │  ├─ groups/
│  │  ├─ home/
│  │  ├─ layout.js
│  │  ├─ locate/
│  │  ├─ mentions-legales/
│  │  ├─ page.js
│  │  ├─ politique-de-confidentialite/
│  │  ├─ settings/
│  │  └─ trips/
│  ├─ components
│  │  ├─ landing-page/
│  │  │  ├─ ....
│  │  │  └─ SolutionSection.jsx
│  │  ├─ layout/
│  │  │  ├─ ....
│  │  │  └─ LayoutProviders.jsx
│  │  ├─ Logout.jsx
│  │  ├─ particles/
│  │  │  ├─ ....
│  │  │  └─ RegisterFormParticle.jsx
│  │  └─ TripCardComponent.jsx
│  ├─ contexts/
│  │  ├─ AuthContext.jsx
│  │  └─ ProfileContext.jsx
│  ├─ datas/
│  │  └─ faq.js
│  ├─ hooks/
│  │  ├─ ....
│  │  └─ useTripsByProfileHook.jsx
│  ├─ services/
│  │  ├─ api.js
│  │  ├─ auth
│  │  │  └─ auth.js
│  │  └─ user-datas
│  │     ├─ ....
│  │     └─ user.js
│  └─ utils/
│     ├─ date.js
│     └─ slugify.js
├─ test
└─ yarn.lock

```
