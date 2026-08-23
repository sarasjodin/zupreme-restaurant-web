# Zuprême Restaurant Web

[![Netlify Status](https://api.netlify.com/api/v1/badges/94262520-4b9a-444e-b51d-9aa9240494e4/deploy-status)](https://app.netlify.com/projects/zupreme-restaurant/deploys) Publik webbplats för <a href="https://zupreme-restaurant.netlify.app/">restaurangen Zuprême.</a>

<img width="72%" src="https://github.com/user-attachments/assets/3c156c51-7207-4d1c-ab74-de44cb9929fb" />
<img width="24%" src="https://github.com/user-attachments/assets/9d8af83f-a7b2-4c92-a4c9-8ba6704d0189" />

Webbplatsen presenterar restaurangen och hämtar menyn dynamiskt från Zuprêmes REST-API. API:t stödjer även full CRUD för kontaktmeddelanden, men den publika implementationen av kontaktformuläret återstår.

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
- Länk till separat administrationsgränssnitt
- Semantisk HTML och tillgänglig navigation
- Tillgängliga formulär med labels och statusmeddelanden

- Framtida implementation:: Kontaktformulär kopplat till REST API

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

Klona repositoryt, gå till projektmappen och installera projektets dependencies:

```bash
git clone <repository-url>
cd zupreme-restaurant-web
npm install

## Utveckling och publicering

| Del | Lokalt | Produktion |
| --- | --- | --- |
| Publik webbplats | `http://localhost:5173` | https://zupreme-restaurant.netlify.app |
| Admin | `http://127.0.0.1:5501` | https://zupreme-restaurant-admin.sarasjodin.se |
| REST API | `http://localhost:3001/api` | https://zupreme-restaurant-api.sarasjodin.se/api |

### Kommandon för den publika webbplatsen

| Kommando | Funktion |
| --- | --- |
| `npm run dev` | Startar Vite lokalt |
| `npm run build` | Skapar produktionsbuild i `dist` |
| `npm run preview` | Förhandsgranskar produktionsbuilden |
| `npm run format` | Formaterar projektet med Prettier |

## Relaterade repositoryn

| Repository | Funktion | Lokal körning |
| --- | --- | --- |
| `zupreme-restaurant-web` | Publik webbplats | Vite med `npm run dev` |
| `zupreme-restaurant-api` | REST API + MySQL | Docker Compose |
| `zupreme-restaurant-admin` | Administrationsgränssnitt | Lokal webbserver / Live Server |

Den publika webbplatsen är beroende av `zupreme-restaurant-api` för dynamisk menydata.
API:t använder MySQL för datalagring.

---

## API-integration

Webbplatsen kommunicerar med Zuprême Restaurant API med webbläsarens Fetch API.

Den publika webbplatsen behöver ingen autentisering för de endpoints som används här. JWT-autentisering används i stället av det separata administrationsgränssnittet för skyddade API-anrop.

GET <a href="https://zupreme-restaurant-api.sarasjodin.se/api/health">/api/health</a>
GET <a href="https://zupreme-restaurant-api.sarasjodin.se/api/menu-items">/api/menu-items</a>
POST <a href="https://zupreme-restaurant-api.sarasjodin.se/api/messages">/api/messages</a>

### API-basadress

`https://zupreme-restaurant-api.sarasjodin.se/api`

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
