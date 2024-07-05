import { loadPage } from "./src/navigation.js";
import { HOME } from "./src/constants.js";

document.addEventListener('DOMContentLoaded', () => {
  // add global listener
  document.addEventListener('click', event => {
    // nav events
    if (event.target.classList.contains('nav-link')) {
      console.log(event)
      loadPage(event.target.getAttribute('data-page'));
    }
   // image container events
   const container = event.target.closest('.conteiner');
   if (container) {
     const key = container.getAttribute('data-key');
     const audio = document.querySelector(`audio[data-key="${key}"]`);
     if (audio) {
       if (audio.paused) {
         audio.currentTime = 0; // Rewind to the start
         audio.play(); // Play the sound
       } else {
         audio.pause(); // Pause the sound
       }
     }
   }
 });

  loadPage(HOME);
});

