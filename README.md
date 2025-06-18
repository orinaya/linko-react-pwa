# <img src="public/assets/images/favicon.svg" alt="comet-gif" width="20"/> Linko - PWA / App Mobile et Bracelet connecté

## 💻 Démo en ligne

➡️[https://linko-flame.vercel.app/](https://linko-flame.vercel.app/)⬅️

![Bannière](public/assets/images/carte-de-visite-banner.png)

![Projet](https://img.shields.io/badge/Projet-Fictif-0162EF?style=for-the-badge)
![Type](https://img.shields.io/badge/Type-PWA--Mobile-CC5C00?style=for-the-badge)
![Statut](https://img.shields.io/badge/Statut-En%20cours-FFBF33?style=for-the-badge)

## Table des matières

1. [Notre Équipe](#-1-notre-équipe)
2. [Description](#-2-description)
3. [Stack technique](#-3-stack-technique)
4. [Fonctonnaliés](#4-fonctionnalités)
5. [Tester le projet](#-5-tester-le-projet)
6. [Architecture du projet](#-6-architecture-du-projet)
7. [Références](#7-références)

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

## 🚀 3. Stack technique

| Catégorie       | Technologie                                                                                                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Langage         | ![Javascript](https://img.shields.io/badge/Javascript-000000?style=for-the-badge&logo=javascript&logoColor=F7DF1E)                                                                                           |
| Framework (PWA) | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=ffffff)                                                                                                    |
| App (futur)     | ![ReactNative](https://img.shields.io/badge/React%20Native-000000?style=for-the-badge&logo=react&logoColor=61DAFB)                                                                                           |
| Backend         | ![Supabase](https://img.shields.io/badge/Supabase-000000?style=for-the-badge&logo=supabase&logoColor=3FCF8E)                                                                                                 |
| Auth            | ![SupabaseAuth](https://img.shields.io/badge/Supabase%20Auth-000000?style=for-the-badge&logo=supabase&logoColor=3FCF8E)                                                                                      |
| CI/CD           | ![Github](https://img.shields.io/badge/Github-000000?style=for-the-badge&logo=github&logoColor=ffffff)![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=ffffff) |
| UI              | ![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-000000?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4)                                                                                        |

## 4. Fonctionnalités

### 4.1 Localisation

Navigation fluide entre les écrans via un système de navigation

<img src="assets/images/Comet-5.gif" alt="comet-gif" width="200"/>

### 4.2 Écran d'accueil

| Accueil                   | Hubble                                               |
| ------------------------- | ---------------------------------------------------- |
| Lien vers la page Planète | Carousel d'images issues du télescope spatial Hubble |

<img src="assets/images/Comet-1.gif" alt="comet-gif" width="200"/>
<img src="assets/images/Comet-2.gif" alt="comet-gif" width="200"/>

### 4.3 Gestion des sorties

| Liste des planètes            | Détail d'une planète                                                                                     |
| ----------------------------- | -------------------------------------------------------------------------------------------------------- |
| Flat List animée des planètes | Au clic sur une planète, l’utilisateur accède à une fiche détaillée contenant des informations enrichies |

<img src="assets/images/Comet-3.gif" alt="comet-gif" width="200"/>
<img src="assets/images/Comet-4.gif" alt="comet-gif" width="200"/>

### 4.3 Gestion des groupes

### 4.4 Gestion des alertes

## ✅ 5. Tester le projet

Maintenant que vous savez tout de nous, laissez-vous guider pas à pas ! ✨

### 5.1 Prérequis

- Node.js ≥ 18
- Android Studio et/ou simulateur ou appareil réel
- React Native CLI (déjà inclus dans les dépendances)

> **Note** : assurez-vous d’avoir terminé le guide [Configurer votre environnement](https://reactnative.dev/docs/set-up-your-environment) avant de continuer.

### 5.2 Installer le projet

📂 **Clônez le dépôt**

```bash
# HTTPS
git clone https://github.com/orinaya/comet-react-native-app.git

# SSH
git clone git@github.com:orinaya/comet-react-native-app.git
```

📦 **Installez les modules**

```
yarn install
```

### 5.3 Lancer le projet

> 💡 **À savoir**
>
> Vous pouvez exécuter l’application sur un appareil Android (via USB) ou dans un émulateur Android Studio.
>
> 📱 **Sur téléphone** : Activez le mode développeur et le débogage USB dans les options de votre appareil. Branchez-le ensuite à votre ordinateur via USB. Vous pouvez vérifier que votre appareil est connecté grâce à la commande :
>
> ```
> adb devices
> ```
>
> Si votre appareil est bien connecté :
>
> ```
> List of devices attached
> [NUMERO]     device
> ```
>
> 💻 **Sur émulateur** : Lancez un appareil virtuel depuis Android Studio > Device Manager, avant d’exécuter la commande yarn android.

▶️ **Lancer Metro**

Tout d'abord, vous devez lancer **Metro**, l’outil de build JavaScript utilisé par React Native.
Pour démarrer le serveur de développement Metro, exécutez la commande suivante à la racine du projet :

```bash
yarn start
```

▶️ **Compiler et exécuter l'application**

Avec Metro en cours d’exécution, ouvrez un nouveau terminal (ou un autre onglet) à la racine du projet, puis lancez l’une des commandes suivantes pour construire et exécuter votre application :

```bash
yarn android
```

🔐 Il vous faudra ensuite créer à la racine du projet un fichier `.env` à partir du fichier `.env.example`

```bash
cp .env.example .env
```

## 📂 6. Architecture du projet

```bash
linko-react-pwa
├─ jsconfig.json # config chemin relatif
├─ next.config.mjs # config next.js
├─ package.json # liste les dépendances
├─ postcss.config.mjs # config postcss tailwind
├─ public
│  ├─ assets
│  │  ├─ fonts
│  │  └─ images
│  └─ manifest.json # contient infos pour PWA (favicon, metadatas, langue, couleurs etc)
├─ README.md
├─ src
│  ├─ app # contient toutes les pages naviguables
│  │  ├─ account/
│  │  ├─ alerts/
│  │  ├─ auth/
│  │  ├─ conditions-generales-d-utilisation/
│  │  ├─ conditions-generales-de-vente/
│  │  ├─ create-profile/
│  │  ├─ foire-aux-questions/
│  │  ├─ groups/
│  │  ├─ home/
│  │  ├─ locate/
│  │  ├─ mentions-legales/
│  │  ├─ politique-de-confidentialite/
│  │  ├─ settings/
│  │  ├─ trips/
│  │  ├─ layout.js # layout global
│  │  ├─ page.js #landing lien => "/"
│  │  └─ globals.css
│  ├─ components # contient toutes les composants de la landing, du layout global etc
│  │  ├─ landing-page/
│  │  ├─ layout/
│  │  └─ particles/
│  ├─ contexts/ # contient les contexts (global, ex : Auth)
│  ├─ datas/ # contient les données en dur (ex: FAQ)
│  ├─ hooks/ # contient les hooks (données réutilisables)
│  ├─ services/ # conenxion auth api supabase
│  │  ├─ auth/
│  │  └─ user-datas/
│  └─ utils/ # fonctions utilitaires (ex: slugify le text pour les url, formattage de dates)
└─ yarn.lock
```

## 7. Références

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
