import { API_BASE_URL } from './config.js';
import './styles.css';
import { showMessage, clearMessage } from './statusMessages.js';

// --------------------------------------------------
// Navigation
// --------------------------------------------------

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const menuLinks = document.querySelectorAll('.nav-menu a');

// Toggle navigation menu
if (menuToggle && mainNav) {

  // Lyssna på klick på menyknappen
  menuToggle.addEventListener('click', () => {
    // Toggle class 'is-open' på main-nav
    // Om classen finns tas den bort, annars läggs den till
    const isOpen = mainNav.classList.toggle('is-open');

    // Uppdatera aria-attribut för tillgänglighet
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Stäng meny' : 'Öppna meny');
  });

  // Lyssna på klick på meny-länkar
  menuLinks.forEach((link) => {
    // När en länk klickas, stäng menyn och uppdatera aria-attribut
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Öppna meny');
    });
  });
}

// --------------------------------------------------
// Navigation - markera aktuell sida i menyn
// --------------------------------------------------

const navLinks = document.querySelectorAll('.nav-menu a');

// Markera klickad navigationslänk
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Ta bort aria-current från alla länkar
    navLinks.forEach((item) => item.removeAttribute('aria-current'));
    // Lägg till aria-current på den klickade länken
    link.setAttribute('aria-current', 'page');
  });
});

// --------------------------------------------------
// Menu API - hämta menyartiklar från API
// --------------------------------------------------

async function getMenuItems() {
  showMessage('menu-status', 'Menyn hämtas...', 'loading');

  try {
    // Hämta menyartiklar från API
    // Kan kasta fel om requesten inte alls kan genomföras,
    // t.ex. nätverksfel, CORS-fel eller API-servern inte kan nås
    const response = await fetch(`${API_BASE_URL}/menu-items`);

    // fetch kastar INTE automatiskt fel för t.ex. 404 eller 500.
    // Därför kontrolleras HTTP-status här
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    // Konvertera svaret till JSON
    const menuItems = await response.json();

    // Rensa statusmeddelande manuellt efter att data har hämtats
    // eftersom autoHide === false
    clearMessage('menu-status');

    // Returnera menyartiklarna
    return menuItems;

  } catch (error) {
    // Det tekniska felet visas endast i webbläsarens console
    console.error('Could not fetch menu items:', error);
    
    // Användaren får ett generellt felmeddelande i #menu-status
    showMessage(
      'menu-status',
      'Menyn kunde inte hämtas just nu.',
      'error'
    );

    return null; // Returnera null för att indikera att hämtningen misslyckades
  }
}

// --------------------------------------------------
// Menu category images - bilder för kategorier som inte har en egen bild
// --------------------------------------------------

const categoryImages = {
  Förrätter: '/images/menu-categories/forratt.webp',
  Soppor: '/images/menu-categories/soppa.webp',
  Varmrätter: '/images/menu-categories/varmratt.webp',
  Efterrätter: '/images/menu-categories/efterratt.webp',
  Drycker: '/images/menu-categories/dryck.webp',
};

// --------------------------------------------------
// Menu rendering - rendera menyartiklar på sidan
// --------------------------------------------------

function renderMenu(menuItems) {
  const menuList = document.querySelector('#menu-list');

  if (!menuList) return;

  // Rensa tidigare innehåll
  menuList.replaceChildren();

  if (menuItems.length === 0) {
  showMessage(
    'menu-status',
    'Det finns inga menyartiklar att visa just nu.',
    'info'
  );

  return;
}

  // Gruppera menyartiklar efter kategori
  const categories = new Map();

  // Skapa en sektion för varje kategori och rendera artiklarna
  menuItems.forEach((item) => {
    if (!categories.has(item.category_name)) {
      categories.set(item.category_name, []);
    }

    // Lägg till artikeln i rätt kategori
    categories.get(item.category_name).push(item);
  });

  // Rendera varje kategori och dess artiklar
  categories.forEach((items, categoryName) => {
    const categorySection = document.createElement('section');
    categorySection.className = 'menu-category';

    // Lägg till rubrik för kategorin
    const categoryHeading = document.createElement('h3');
    categoryHeading.textContent = categoryName;

    // Lägg till kategorirubriken i kategorisektionen
    categorySection.appendChild(categoryHeading);

    // Rendera varje menyartikel i kategorin
    items.forEach((item) => {
      const article = createMenuItem(item);
      categorySection.appendChild(article);
    });

    // Lägg till kategorisektionen i menyn
    menuList.appendChild(categorySection);
  });
}

// --------------------------------------------------
// Create menu item - skapa HTML för en menyartikel
// --------------------------------------------------

function createMenuItem(item) {
  // Skapa HTML-element för menyartikeln
  const article = document.createElement('article');
  article.className = 'menu-item';

  // Skapa wrapper för bilden och badge
  const imageWrapper = document.createElement('div');
  imageWrapper.className = 'menu-item-image-wrapper';

  // Skapa bild
  const image = document.createElement('img');
  image.className = 'menu-item-image';

  // Använd image_path om det finns, annars använd standardbild för kategorin
  image.src =
  item.image_path ?? categoryImages[item.category_name];
  image.alt = '';

  // Skapa badge
  const badge = document.createElement('div');
  badge.className = 'ai-badge';
  badge.setAttribute('aria-label', 'AI-genererad bild');

  // Skapa textinnehåll för badge
  const ai = document.createElement('span');
  ai.className = 'ai';
  ai.textContent = 'AI';
  const generated = document.createElement('span');
  generated.className = 'generated';
  generated.textContent = 'GENERERAD BILD';

  // Lägg till AI-badge i bilden
  badge.append(ai, generated);
  // Lägg till bild och badge i wrappern
  imageWrapper.append(image, badge);

  // Skapa innehåll för menyartikeln
  const content = document.createElement('div');
  // Använd flexbox för att innehållet ska ta upp återstående utrymme
  content.className = 'menu-item-content';

  // Skapa rubrik och beskrivning
  const name = document.createElement('h4');
  name.textContent = item.name;

  // Skapa beskrivning
  const description = document.createElement('p');
  description.textContent = item.description;

  // Lägg till rubrik och beskrivning i innehållet
  content.append(name, description);

  // Skapa meta-information för menyartikeln
  const meta = document.createElement('div');
  meta.className = 'menu-item-meta';

  // Skapa portion
  const serving = document.createElement('span');
  serving.className = 'menu-serving';
  serving.textContent = item.serving;

  // Skapa pris
  const price = document.createElement('span');
  price.className = 'menu-price';
  // Väljer ändå att ta bort decimaler från priset för att det ska se snyggare ut
  price.textContent = `${Math.trunc(item.price)} kr`;

  // Lägg till portion och pris i meta-informationen
  meta.append(serving, price);

  // Lägg till bild, innehåll och meta-information i artikeln
  article.append(imageWrapper, content, meta);

  // Returnera den färdiga artikeln
  return article;
}

// --------------------------------------------------
// Initialize page - initiera sidan med menyartiklar
// --------------------------------------------------

async function init() {
  // Undvik att försöka rendera menyn om annan sida än menyn visas
  const menuList = document.querySelector('#menu-list');
  if (!menuList) return;
  // Hämta menyartiklar från API och rendera dem på webbsidan
  const menuItems = await getMenuItems();

    if (menuItems === null) return; // Om hämtningen misslyckades, avbryt initieringen

  // Rendera menyartiklarna på webbsidan
  renderMenu(menuItems);
}

init();


// --------------------------------------------------
// Send message - Skicka meddelande från kontaktformulär
// --------------------------------------------------

/* sendMessage()
→ POST /api/messages
→ update form-status */

/* document.querySelector('#contact-form');
document.querySelector('#form-status'); */
