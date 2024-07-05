export const toHomeView = () => `
<div id="home">
  <h1></h1>
  <div class="home-content">
    <p>Simple movie database app. You can:</p>
    <ul>
      <li>Browse categories</li>
      <li>Browse movies</li>
      <li>Add and remove movies from favorites</li>
      <li>Search for movies by title</li>
    </ul>
  </div>
</div>
`;

export const toBulgariaView = () => `
<div id="home">
  <h1>Singers</h1>
  <p>Click on a picture to play a song</p>
  <div class="home-content">
  <div class="images">
  <div class="conteiner" data-key="1">
  <img src="imgs/nasko i milko.jpg" alt="nasko">
</div>
<div class="conteiner" data-key="2">
<img src="imgs/preslava.jpg" alt="preslava">
</div>
<div class="conteiner" data-key="3">
<img src="imgs/toni.jpg" alt="toni">
</div>
<div class="conteiner" data-key="4">
<img src="imgs/galena.jpg" alt="galena">
</div>

  <audio data-key="1" src="songs/MILKO KALAYDZHIEV & NASKO MENTATA - BRAMCHALKA.mp3"></audio>
  <audio data-key="2" src="songs/PRESLAVA - DYAVOLSKO ZHELANIE.mp3"></audio>
  <audio data-key="3" src="songs/TONI STORARO - Otlichen (6).mp3"></audio>
  <audio data-key="4" src="songs/GALENA - ZNAM DIAGNOZATA.mp3"></audio>
  

    </div>
  </div>
</div>
`;

export const toSerbiaView = () => `
<div id="home">
  <h1>Singers</h1>
  <div class="home-content">
   <div class = "images">
   <img data-key="5" src="imgs/indira.jpg" alt="indira">
   <img data-key="6" src="imgs/ceca.png" alt="ceca">
   <img data-key="7" src="imgs/mile.jpg" alt="mile">
   <img data-key="8" src="imgs/shaban.jpg" alt="shaban">

    <audio data-key="5" src="songs/at.mp3"></audio>
  <audio data-key="6" src="songs/fr.mp3"></audio>
  <audio data-key="7" src="songs/sr.mp3"></audio>
  <audio data-key="8" src="songs/sr.mp3"></audio>

   </div>
  </div>
</div>
`;

export const toGreeceView = () => `
<div id="home">
  <h1>Singers</h1>
  <div class="home-content">
    <p>Simple movie database app. You can:</p>
    <ul>
      <li>Greece</li>
      <li>Browse movies</li>
      <li>Add and remove movies from favorites</li>
      <li>Search for movies by title</li>
    </ul>
  </div>
</div>
`;
