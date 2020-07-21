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

const nav = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

const navGenerator = () => {
  let navContainer = '';

  //getting each section id and data value then implent them into nav link
  sections.forEach((section) => {
    const sectionId = section.id;
    const sectionNavData = section.dataset.nav;

    navContainer += `<li><a class="menu__link" href="#${sectionId}">${sectionNavData}</a></li>`;
  });

  // Add nav items to the nav element
  nav.innerHTML = navContainer;
};

navGenerator();

// Add class 'active' to section when near top of viewport

// get the offset value of the section
const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

//removing active class
const removeActiveClass = (section) => {
  section.classList.remove('your-active-class');
};
// adding the active class
const addActiveClass = (condition, section) => {
  if (condition) {
    section.classList.add('your-active-class');
  }
};
//implementating the main (active class) function

const activateTargetSection = () => {
  sections.forEach((section) => {
    const elementTopOffset = offset(section);

    inViewport = () => elementTopOffset < 150 && elementTopOffset >= -150;

    removeActiveClass(section);
    addActiveClass(inViewport(), section);
  });
};

window.addEventListener('scroll', activateTargetSection);

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
