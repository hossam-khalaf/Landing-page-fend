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

// Build menu
//https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Dynamic Navbar (Navigation Menu)

const navigationMenu = () => {
  const navbarList = document.querySelector('#navbar__list');
  const mainSections = document.querySelectorAll('section');
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

// Set sections as active
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// setting IntersectionObserver object / observing viewport
const activateSectionOnScroll = () => {
  const mainSections = document.querySelectorAll('section');
  let options = {
    root: null,
    rootMargin: '5px 0px -130px 0px',
    threshold: 0.5,
  };

  let observer = new IntersectionObserver(hittingSection, options);

  //observe by looping over sections
  mainSections.forEach((mainSection) => {
    observer.observe(mainSection);
  });

  //callback functionality
  function hittingSection(sections, observer) {
    sections.forEach((section) => {
      if (section.isIntersecting) {
        section.target.classList.add('your-active-class');
      } else {
        section.target.classList.remove('your-active-class');
      }
    });
  }
};

activateSectionOnScroll();

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
// Scroll to section on link click by targeting hash value which is same with section ID

const scrollToTargetSection = () => {
  const navLinks = document.querySelectorAll('.menu__link');

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', (e) => {
      e.preventDefault();

      let hashValue = navLink.getAttribute('href');
      let target = document.querySelector(hashValue);

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
};

scrollToTargetSection();
