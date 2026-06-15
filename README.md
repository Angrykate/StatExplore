# 📊 StatExplore — Site de Révision MTH1620

> Site de révision interactif pour le cours **MTH1620 – Statistiques Exploratoires Multidimensionnelles**
>
> **École Polytechnique de Lomé** — Licence IA & Big Data — Semestre 6
>
> [![GitHub Pages](https://img.shields.io/badge/hébergé%20sur-GitHub%20Pages-181717?style=flat&logo=github)](https://angrykate.github.io/statexplore/)
> [![Licence](https://img.shields.io/badge/licence-MIT-blue?style=flat)](LICENSE)
> [![Stack](https://img.shields.io/badge/stack-HTML%2FCSS%2FJS%20vanilla-%23E34F26?style=flat)]()

---

## 📋 Table des matières

- [🎯 Contexte et Objectif](#-contexte-et-objectif)
- [✨ Aperçu](#-aperçu)
- [🗂️ Architecture du Site](#️-architecture-du-site)
- [📐 Gabarit de Page](#-gabarit-de-page)
- [🎨 Charte Graphique](#-charte-graphique)
- [⚙️ Stack Technique](#️-stack-technique)
- [📚 Contenu Pédagogique](#-contenu-pédagogique--formules-clés-par-module)
- [🎯 Lien avec l'Examen MTH1620](#-lien-avec-lexamen-mth1620)
- [🚀 Déploiement sur GitHub Pages](#-déploiement-sur-github-pages)
- [💻 Utilisation en Local](#-utilisation-en-local)
- [📋 État d'Avancement](#-état-davancement)
- [🤝 Contribuer](#-contribuer)
- [📄 Licence](#-licence)

---

## 🎯 Contexte et Objectif

Ce site a été conçu comme **outil de révision** pour l'examen final écrit du cours **MTH1620**, qui représente **70% de la note finale**. Il couvre l'intégralité du programme : des fondements d'algèbre linéaire jusqu'aux méthodes modernes de réduction de dimension.

L'objectif est triple :

- 🧠 **Comprendre** — les fondements mathématiques de chaque méthode
- 📝 **Mémoriser** — les formules clés à travers la répétition active et les visualisations
- ✏️ **S'entraîner** — à des calculs écrits tels qu'ils peuvent apparaître à l'examen

Le site est conçu pour être **partagé entre étudiants**, hébergé gratuitement sur **GitHub Pages**, sans serveur ni base de données — **100% statique** (HTML, CSS, JavaScript).

---

## ✨ Aperçu

| Page d'accueil | Page de cours |
|:---:|:---:|
| Dashboard avec les 6 modules | Navigation, formules MathJax, quiz |
| Barres de progression par module | Visualisations Canvas interactives |
| Lien direct vers l'examen type | Encadrés "À retenir / À l'examen" |

> **🔗 Lien direct** : [angrykate.github.io/statexplore](https://angrykate.github.io/statexplore/) *(après activation GitHub Pages)*

---

## 🗂️ Architecture du Site

Le projet suit une **structure modulaire** : chaque module est isolé dans son propre dossier, avec son propre `index.html` servant de porte d'entrée.

```
statexplore/
│
├── index.html                              ← Accueil / Dashboard — tous les modules
├── README.md                               ← Documentation du projet
│
├── assets/
│   ├── css/
│   │   └── global.css                      ← Feuille de styles globale (variables, layout, composants)
│   └── js/
│       └── progress.js                     ← Script de suivi de progression par module
│
├── algebre/                                ← 🔷 Module 1 — Algèbre Linéaire
│   ├── index.html                          ← Vue d'ensemble + 6 pages
│   ├── matrices.html                       ← Matrices & opérations + calculateur interactif
│   ├── applications-lineaires.html         ← Applications linéaires, noyau, image, théorème du rang
│   ├── changement-de-base.html             ← Changement de base, matrice de passage + canvas 2D
│   ├── valeurs-vecteurs-propres.html       ← Valeurs/vecteurs propres + canvas animé
│   ├── diagonalisation.html                ← Diagonalisation A = PDP⁻¹ + SVD complète
│   └── produit-scalaire-covariance.html    ← Produit scalaire, orthogonalité, covariance, centrage
│
├── acp/                                    ← 🔷 Module 2 — ACP (7 pages)
│   ├── index.html                          ← Vue d'ensemble du module
│   ├── introduction-principe.html          ← Principe, dualité ℝᵖ/ℝⁿ, ACP normée vs non normée
│   ├── espace-individus.html               ← Nuage des individus, centrage, C = X'X
│   ├── espace-variables.html               ← Nuage des variables, d² = 2(1−r), cercle des corrélations
│   ├── axes-composantes.html               ← Axes factoriels, ψ = Xu, formules de transition
│   ├── inertie-qualite.html                ← Taux d'inertie τq, cos², CTR, scree plot interactif
│   ├── individus-variables-supp.html       ← Éléments supplémentaires, variables nominales
│   └── interpretation-exemple.html         ← 🔥 Exercice complet examen MTH1620 (données vin)
│
├── methodes-nonlineaires/                  ← 🔷 Module 3 — Méthodes Non-Linéaires
│   ├── index.html                          ← Vue d'ensemble + tableau comparatif des 4 méthodes
│   ├── isomap.html                         ← Géodésiques, Floyd-Warshall, MDS, B = −½HD²H
│   ├── lle.html                            ← Reconstruction locale, poids W, petites vp de M
│   ├── tsne.html                           ← Distributions gaussienne/Student, KL(P‖Q), perplexité
│   └── umap.html                           ← Graphe flou, entropie croisée, tableau comparatif final
│
├── ica/                                    ← 🔷 Module 4 — ICA
│   └── index.html                          ← Modèle X = AS, FastICA, kurtosis, néguentropie, ICA vs ACP
│
├── anova/                                  ← 🔷 Module 5 — ANOVA
│   └── index.html                          ← Décomposition SCT = SCE + SCR, test de Fisher, exemple complet
│
└── afc/                                    ← 🔷 Module 6 — AFC
│   └── index.html                          ← Tableau de contingence, profils, χ², inertie, exercice examen
```

### 📊 Statistiques du projet

| Métrique | Valeur |
|----------|--------|
| Modules complétés | **6 / 6** ✅ |
| Pages de cours | 22 |
| Visualisations interactives | 15+ |
| Quiz | 30+ questions |
| Formules clés | 30+ |
| Poids à l'examen couvert | ~100% |

---

## 📐 Gabarit de Page

Chaque page de contenu suit la structure standardisée suivante, garantissant une **expérience cohérente** sur l'ensemble du site :

### 1. 🧭 Navigation & Fil d'Ariane

- Barre de navigation **sticky** avec liens vers tous les modules
- **Fil d'Ariane** (Module > Sous-thème) pour se repérer
- Tag du module **coloré** selon la charte graphique

### 2. 💡 Concept expliqué progressivement

- **Pourquoi ?** — L'intuition, le problème concret que cette notion résout
- **Quoi ?** — La définition formelle
- **Comment ?** — La mécanique, les étapes de calcul
- Construction **pas à pas**, du particulier vers le général

### 3. 📐 Formules (rendues via MathJax 3 CDN)

- Toutes les formules typographiées en **LaTeX** via MathJax
- Chaque formule accompagnée d'une **légende** expliquant chaque symbole
- **Exemples numériques** d'application

### 4. 🎮 Visualisation Interactive (Canvas HTML5)

- Graphique ou **animation** spécifique à la notion
- **Curseurs et sliders** pour manipuler les paramètres en temps réel
- Implémenté en **JavaScript vanilla** (pas de librairies externes)

### 5. 📌 Encadré "À retenir / À l'examen"

- Bloc visuel distinct avec **bordure colorée** selon le module
- Formule(s) clé(s) à connaître **par cœur**
- ⚠️ **Pièges classiques** à éviter le jour de l'examen

### 6. ✅ Quiz de Validation

- **3 à 4 questions** par page
- **QCM** avec correction détaillée affichée après réponse
- Feedback différencié :
  - ✅ **Correct** → vert avec explication
  - ❌ **Incorrect** → rouge avec correction complète

---

## 🎨 Charte Graphique

### Thème général

| Élément | Valeur |
|---------|--------|
| **Fond** | `#0D0D14` (noir profond) |
| **Cartes** | `#13131F` |
| **Surface** | `#1E1E30` |
| **Texte primaire** | `#F0F0F8` |
| **Texte secondaire** | `#8888AA` |
| Mode | 🌙 **Sombre uniquement** — optimisé pour la révision nocturne |

### Palette — Couleur par module

| Module | Couleur | Hex |
|--------|---------|-----|
| 🔷 Algèbre | Indigo profond | `#4F46E5` |
| 🔷 ACP | Cyan scientifique | `#0891B2` |
| 🔷 Méthodes non-linéaires | Violet | `#7C3AED` |
| 🔷 ICA | Émeraude | `#059669` |
| 🔷 ANOVA | Ambre | `#D97706` |
| 🔷 AFC | Rose | `#DB2777` |

### Typographie

- **Corps** : `Inter` — Google Fonts (CDN)
- **Code & formules** : `JetBrains Mono`
- **Formules mathématiques** : MathJax 3 (CDN)

---

## ⚙️ Stack Technique

| Technologie | Usage |
|-------------|-------|
| **HTML5** | Structure sémantique des pages |
| **CSS3** | Style, variables CSS, layout (Grid/Flexbox) |
| **JavaScript vanilla** | Interactivité, quiz, visualisations Canvas |
| **MathJax 3** (CDN) | Rendu des formules LaTeX |
| **Tabler Icons** (CDN) | Bibliothèque d'icônes |
| **Canvas API** | Visualisations interactives (courbes, animations, matrices) |

> ✅ **Aucun framework, aucun bundler, aucune dépendance locale.**
> Chaque fichier HTML est **autonome** et s'ouvre directement dans un navigateur.

### Arborescence des assets

```
assets/
├── css/
│   └── global.css          ← Variables CSS, layout (nav, cards, quiz, formules), responsive
└── js/
    └── progress.js          ← Barres de progression par module (localStorage)
```

Le fichier `global.css` centralise :

- Les **variables CSS** (couleurs, espacement, bordures)
- Les **composants réutilisables** (navigation, cartes, quiz, formulaires, boîtes de formules)
- Le **layout responsive** (grille, sidebar, conteneurs)
- Les **classes utilitaires** (marges, flexbox, couleurs)

---

## 📚 Contenu Pédagogique — Formules Clés par Module

### Module 1 — Algèbre Linéaire

| Notion | Formule |
|--------|---------|
| Valeurs propres | `det(A − λI) = 0` |
| Vecteurs propres | `Av = λv` |
| Diagonalisation | `A = PDP⁻¹` |
| Matrice de passage | `[v]_B = P⁻¹[v]_E` |
| SVD | `X = UΣVᵀ = Σ σα uα vαᵀ` |
| Matrice de covariance | `Σ = (1/n)XcᵀXc` |
| Matrice de corrélation | `rᵢⱼ = σᵢⱼ / (σᵢ·σⱼ)` |
| Centrage matriciel | `Xc = HX` avec `H = I − (1/n)11ᵀ` |

### Module 2 — ACP

| Notion | Formule |
|--------|---------|
| Données centrées-réduites | `xᵢⱼ = (rᵢⱼ − r̄ⱼ) / (sⱼ√n)` |
| Matrice à diagonaliser | `C = XᵀX` (corrélation en ACP normée) |
| Composantes principales | `ψα = Xuα` |
| Coordonnées variables | `φαj = √λα · uαj = cor(j, ψα)` |
| Formules de transition | `vα = (1/√λα)Xuα` et `uα = (1/√λα)Xᵀvα` |
| Taux d'inertie | `τq = Σ(k≤q)λk / Σλk` |
| Distance entre variables | `d²(j,j') = 2(1 − rjj')` |
| Cos² individu | `ψ²αi / d²(i,G)` |
| Contribution | `CTR(i) = ψ²αi / (n·λα)` |
| Individus supplémentaires | `F⁺ = X⁺·U` |

### Module 3 — Méthodes Non-Linéaires

| Méthode | Formule clé |
|---------|-------------|
| ISOMAP | `B = −½HD²GH` puis diagonalisation de B |
| LLE (étape 2) | `min Σᵢ ‖xᵢ − Σⱼ Wᵢⱼxⱼ‖²` s.c. `ΣⱼWᵢⱼ = 1` |
| LLE (étape 3) | petites vp non nulles de `M = (I−W)ᵀ(I−W)` |
| t-SNE coût | `KL(P‖Q) = Σᵢⱼ pᵢⱼ log(pᵢⱼ/qᵢⱼ)` |
| t-SNE BD | `qᵢⱼ = (1+‖yᵢ−yⱼ‖²)⁻¹ / Z` (Student ν=1) |
| UMAP similarité HD | `vᵢⱼ = exp(−(d(xᵢ,xⱼ)−ρᵢ)/σᵢ)` |
| UMAP similarité BD | `wᵢⱼ = 1/(1+a‖yᵢ−yⱼ‖²ᵇ)` |
| UMAP coût | entropie croisée binaire entre les deux graphes |

### Module 4 — ICA

| Notion | Formule |
|--------|---------|
| Modèle | `X = AS` → objectif : trouver `W = A⁻¹` |
| Sources estimées | `Ŝ = WX` |
| Kurtosis | `E[s⁴] − 3(E[s²])²` |
| Néguentropie | `J(s) = H(s_gauss) − H(s) ≥ 0` |
| FastICA | `w ← E[x̃g(wᵀx̃)] − E[g'(wᵀx̃)]w` |

### Module 5 — ANOVA

| Notion | Formule |
|--------|---------|
| Décomposition | `SCT = SCE + SCR` |
| Statistique de Fisher | `F = (SCE/(k−1)) / (SCR/(n−k))` |

### Module 6 — AFC

| Notion | Formule |
|--------|---------|
| Profil ligne | `fᵢⱼ/fᵢ.` |
| Distance du χ² | `d²(i,i') = Σⱼ (1/f.ⱼ)(fᵢⱼ/fᵢ. − fᵢ'ⱼ/fᵢ'.)²` |
| Inertie totale | `I = χ²/n` |

---

## 🎯 Lien avec l'Examen MTH1620

La page `acp/interpretation-exemple.html` résout **intégralement l'exercice 1 de l'examen passé** :

| Question | Sujet |
|----------|-------|
| **Q1** | Quelle méthode utiliser ? |
| **Q2a** | Démonstration valeurs propres identiques de R et S |
| **Q2b** | Relation entre uₖ et vₖ (formules de transition) |
| **Q3** | Signification géométrique de la dualité |
| **Q4** | Calcul de R et S sur les données vin |
| **Q5a** | Interprétation des axes factoriels |
| **Q5b** | Représentation des individus sur le plan factoriel |

La page `afc/index.html` résout **l'exercice 2** de l'examen.

---

## 🚀 Déploiement sur GitHub Pages

> ⚠️ **Important** : le dépôt actuel est associé à `https://github.com/Angrykate/Training.git`.
> Pour déployer proprement, créez un **nouveau dépôt dédié** nommé `statexplore`.

### Option 1 : Créer un nouveau dépôt dédié (recommandé)

```bash
# 1. Créer un nouveau dépôt "statexplore" sur GitHub

# 2. Initialiser et pousser le code
cd "c:\Users\USER\Documents\IA\statexplore"
git init
git add .
git commit -m "Initial commit — StatExplore MTH1620"
git remote add origin https://github.com/Angrykate/statexplore.git
git push -u origin main

# 3. Activer GitHub Pages
# → GitHub.com > Settings > Pages > Source: Deploy from branch > main / root
```

### Option 2 : Sous-dossier dans le dépôt Training

Si vous préférez garder le dépôt Training actuel, déplacez le dossier `statexplore/` vers un sous-dossier organisé et configurez GitHub Pages sur ce sous-dossier.

### Accès

Une fois GitHub Pages activé, le site sera accessible à :

```
https://angrykate.github.io/statexplore/
```

---

## 💻 Utilisation en Local

```bash
# Cloner le dépôt
git clone https://github.com/Angrykate/statexplore.git

# Ouvrir directement dans le navigateur
cd statexplore
start index.html
# ou : open index.html (macOS)
# ou : xdg-open index.html (Linux)
```

> **Note** : Pour un rendu optimal des formules MathJax, il est recommandé d'utiliser un serveur local :
>
> ```bash
> # Python 3
> python -m http.server 8000
> # → http://localhost:8000
>
> # Node.js (si installé)
> npx serve .
> # → http://localhost:3000
> ```

---

## 📋 État d'Avancement

### 📈 Progression globale

| Module | Pages | Statut |
|--------|-------|--------|
| 🏠 **Accueil** | `index.html` | ✅ Dashboard avec navigation complète |
| 🔷 **Algèbre Linéaire** | 6 pages | ✅ Matrices, applications linéaires, changement de base, valeurs propres, diagonalisation, covariance |
| 🔷 **ACP** | 7 pages | ✅ Introduction, individus/variables, axes, inertie, supplémentaires, **exercice examen complet** |
| 🔷 **Méthodes Non-Linéaires** | 4 pages | ✅ ISOMAP, LLE, t-SNE, UMAP + tableau comparatif |
| 🔷 **ICA** | 1 page | ✅ FastICA, kurtosis, néguentropie, comparaison ACP |
| 🔷 **ANOVA** | 1 page | ✅ Décomposition SCT = SCE + SCR, test de Fisher, exemple complet |
| 🔷 **AFC** | 1 page | ✅ Tableau de contingence, profils, χ², inertie, exercice examen |

**Total : 22 pages — 6 modules complétés 🎉**

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! Voici comment participer :

1. **Fork** le projet
2. Créez une **branche** (`git checkout -b feature/ma-contribution`)
3. **Commitez** vos changements (`git commit -m "Ajout de..."`)
4. **Push** vers la branche (`git push origin feature/ma-contribution`)
5. Ouvrez une **Pull Request**

### Idées de contributions

- Ajouter des **exercices supplémentaires** type examen
- Améliorer les **visualisations Canvas**
- Ajouter des **animations** ou **transitions**
- Proposer des **corrections** ou **améliorations**
- Traduire les pages en **anglais**
- Ajouter des **fiches de révision imprimables**

---

## 📄 Licence

Ce projet est mis à disposition dans le cadre du cours **MTH1620** de l'**École Polytechnique de Lomé**.

> *Ce site n'est pas un remplacement du cours officiel. Il est un complément de révision basé sur le syllabus MTH1620 et les documents pédagogiques fournis par les enseignants.*

---

<div align="center">

**StatExplore** · MTH1620 · École Polytechnique de Lomé · Licence IA & Big Data

*Réviser n'a jamais été aussi structuré 📊*

</div>