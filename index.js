import { loadPage } from "./src/navigation.js";
import { HOME } from "./src/constants.js";

document.addEventListener('DOMContentLoaded', () => {
    // add global listener
    document.addEventListener('click', event => {
      // nav events
      if (event.target.classList.contains('nav-link')) {
        loadPage(event.target.getAttribute('data-page'));
      }
  
    });
  
    loadPage(HOME);
  });