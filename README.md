# Zuprême Restaurant Web

Publik webbplats för <a href="https://zupreme-restaurant.netlify.app/">restaurangen Zuprême.</a>

<img src="" alt="Alt text" width="72%">
<img src="" alt="Alt text" width="24%">

Webbplatsen presenterar restaurangen, hämtar den aktuella menyn dynamiskt från Zuprêmes REST API och erbjuder ett kontaktformulär för att skicka meddelanden till restaurangen.

---

## Om projektet

Zuprême Restaurant Web är den publika frontend-delen av Zuprême Restaurant-systemet.

Webbplatsen är utvecklad mobile-first med HTML, CSS och JavaScript och byggs med Vite. Menydata hämtas från ett separat REST API, vilket gör att innehållet kan uppdateras genom Zuprêmes administrationsgränssnitt utan att den publika webbplatsens HTML behöver ändras.

Projektet är utvecklat som en del av ett utbildningsprojekt inom webbutveckling.

---

## Funktioner

- Responsiv mobile-first-layout
- Dynamisk restaurangmeny hämtad från REST API
- Meny grupperad efter kategori
- Kontaktformulär kopplat till REST API
- Länk till separat administrationsgränssnitt
- Semantisk HTML och tillgänglig navigation
- Tillgängliga formulär med labels och statusmeddelanden

---

## Tekniker

- HTML5
- CSS3
- JavaScript (ES Modules)
- Vite
- Fetch API
- REST API
- WebP
- npm
- Prettier
- Git
- GitHub
- Netlify

---

## Installation

Klona repositoryt och installera projektets dependencies:

```bash
npm install
```

### Starta utvecklingsservern

`npm run dev` (vite)

???

### Bygg för produktion

`npm run build` (vite build)

### Förhandsgranska produktionsbuild

`npm run preview` (vite preview)

### Formatera kod

`npm run format` (prettier --write .)
Kör Prettier för projektets filer

---

## API-integration

Webbplatsen kommunicerar med Zuprême Restaurant API med webbläsarens Fetch API.

Den publika webbplatsen behöver ingen autentisering för de endpoints som används här. JWT-autentisering används i stället av det separata administrationsgränssnittet för skyddade API-anrop.

GET <a href="https://zupreme-restaurant-api.sarasjodin.se/api/health">/api/health</a>
GET <a href="https://zupreme-restaurant-api.sarasjodin.se/api/menu-items">/api/menu-items</a>
POST <a href="https://zupreme-restaurant-api.sarasjodin.se/api/messages">/api/messages</a>

### API-basadress

`https://zupreme-restaurant-api.sarasjodin.se/api`

### Endpoints

| Method | Endpoint      | Beskrivning                      |
| ------ | ------------- | -------------------------------- |
| `GET`  | `/menu-items` | Hämtar tillgängliga menyartiklar |
| `POST` | `/messages`   | Skickar ett kontaktmeddelande    |

---

## Deployment

Webbplatsen byggs med Vite och publiceras som en statisk webbplats.
Produktionsbuild skapas med:

```bash
npm run build
```

Webbplatsen är publicerad via Netlify:
`https://zupreme-restaurant.netlify.app/`

---

## AI-genererade bilder

Menybilderna i projektet är AI-genererade och används som illustrativt
material.

AI-genererade bilder är tydligt markerade med `AI-GENERERAD BILD`
på webbplatsen.

Märkningen är inspirerad av <a href="https://spec.c2pa.org/specifications/specifications/2.2/ux/UX_Recommendations.html">C2PA:s rekommendationer</a> om tydlig användarinformation för AI-genererat innehåll. Projektet implementerar inte C2PA Content Credentials.

---

## Versionshantering

Projektet använder Git och GitHub för versionshantering.

- Ändringar dokumenteras i `CHANGELOG.md`
- Projektets version anges i `package.json`
- Viktiga releaser märks med Git tags, exempelvis `v0.2.0`
- Commit-meddelanden följer Conventional Commits, exempelvis `feat:`, `fix:` och `chore:`

---

## Relaterade Zuprême-applikationer

- **REST API:** `https://zupreme-restaurant-api.sarasjodin.se/`
- **Administration:** `https://zupreme-restaurant-admin.sarasjodin.se/`

---
