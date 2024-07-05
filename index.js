import { loadPage } from "./src/navigation.js";
import { HOME } from "./src/constants.js";

document.addEventListener('DOMContentLoaded', () => {
  // add global listener
  document.addEventListener('click', event => {
    // nav events
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
      initializeVolumeControl(); 
    }
   
   const container = event.target.closest('.conteiner');
   if (container) {
     const key = container.getAttribute('data-key');
     const audio = document.querySelector(`audio[data-key="${key}"]`);
     if (audio) {
       if (audio.paused) {
         audio.currentTime = 0; 
         audio.play(); 
       } else {
         audio.pause(); 
       }
     }
   }
 });

  loadPage(HOME);
  initializeVolumeControl(); 
});

function initializeVolumeControl() {
  const audioElements = document.querySelectorAll('audio');
  const volumeControl = document.getElementById('volume');

  
  audioElements.forEach(audio => {
    audio.volume = volumeControl.value;
  });

  volumeControl.addEventListener('input', (event) => {
    const volume = event.target.value;
    audioElements.forEach(audio => {
      audio.volume = volume;
    });
  });
}

