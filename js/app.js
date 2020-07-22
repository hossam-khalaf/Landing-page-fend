/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 */
const navbarList = document.querySelector('#navbar__list');
const mainSections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Dynamic Navbar (Navigation Menu)

const navigationMenu = () => {
  const navbarItemsFrag = document.createDocumentFragment();

  mainSections.forEach((mainSection) => {
    const mainSectionId = mainSection.id;
    const mainSectionData = mainSection.dataset.nav;

    const navbarItem = document.createElement('li');
    navbarItem.innerHTML = `<a class="menu__link" href="#${mainSectionId}">${mainSectionData}</a>`;

    navbarItemsFrag.appendChild(navbarItem);
  });

  navbarList.appendChild(navbarItemsFrag);
};

navigationMenu();

//active state to  navigation items

const activeLink = () => {
  const navLinks = document.querySelectorAll('.menu__link');

  navLinks.forEach((navlink) => {
    navlink.addEventListener('click', function () {
      navLinks.forEach((link) => link.classList.remove('menu__link--active'));

      this.classList.add('menu__link--active');
    });
  });
};

activeLink();

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
