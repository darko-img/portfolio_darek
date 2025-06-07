<script>
  import { onMount } from 'svelte';
  import { aboutReveal } from '$lib/animations/gsap';

  onMount(() => {
    aboutReveal();
  });
</script>

<main>

<header>

<!-- <span class="daro">
  <span class="letter about-reveal">D</span>
  <span class="letter about-reveal">A</span>
  <span class="letter about-reveal">R</span>
  <span class="letter about-reveal">O</span>
</span> -->

<span class="year">
  <span class="letter2 about-reveal">1</span>
  <span class="letter2 about-reveal">9</span>
  <span class="letter2 about-reveal">9</span>
  <span class="letter2 about-reveal">1</span>
</span>

</header>

<div class="about-wrapper">

<div class="spacer"></div>

<div class="about">
  <div class="col-1">
    <p class="t-reveal">Geboren 1991 in Stettin, Polen, war ich schon früh der Junge,
      der immer ein Blatt Papier und einen Stift zur Hand hatte.
      Kunst war für mich mehr als nur Zeitvertreib – sie war mein
      Fenster zur Welt. Mit vier Jahren zog ich mit meiner Mutter
      nach Berlin – ganz spontan, ohne zu wissen, was uns erwartet.
      Die Stadt hat mich geprägt, ihr Rhythmus, ihre Farben, ihre
      Vielfalt, ihre Dynamik.</p>

      <img src="/darek_jung.webp" alt="Dariusz Porträt" class="portrait" />
  </div>

  <div class="col-2">
    <div class="section">
      <p class="t-reveal">Heute bin ich Motion Designer und angehender Webdesigner –
        mit einer tiefen Leidenschaft für Gestaltung, die sich bewegt und
        verändert. Ich liebe es, Ideen nicht nur sichtbar, sondern
        auch erlebbar zu machen.</p>
    </div>
    <div class="section">
      <p class="t-reveal">Der Weg dahin war alles andere als linear. Ich habe ausprobiert,
        verworfen, neu angefangen. Was sich aber nie geändert hat:
        Mein Blick für Details und mein Wunsch, Emotionen durch Design
        auszulösen. Ich glaube fest daran, dass gutes Design nicht nur
        gut aussieht – sondern etwas in uns auslöst und gleichzeitig eine
        Funktion erfüllt, Design ist nie willkürlich, es ist eine Reise.
        Mutig, klar und aufregend.</p>
    </div>
    <div class="section">
      <p class="t-reveal">Gestaltung beginnt für mich mit Beobachtung. Wenn ich nicht
        entwerfe, zeichne ich – oder lasse mich von Natur, alten Schriften
        oder der Stadt inspirieren. Ich mag den Kontrast zwischen Alt
        und Neu, zwischen Gefühl und System. Und: Gute Gestaltung lebt
        für mich von Interaktion – zwischen Nutzer und Objekt,
        zwischen Mensch und Medium.</p>
    </div>
    <div class="section">
      <p class="t-reveal">Ich liebe es, Dinge zum Leben zu erwecken – ob durch Animationen
        oder durch eine durchdachte visuelle Struktur. Ich achte sehr auf
        die Feinheiten, die andere vielleicht übersehen, weil ich weiß, dass
        genau dort oft die Magie liegt.</p>
    </div>
     <div class="section">
      <p class="t-reveal">Ich arbeite besonders gern mit Menschen, die neugierig und mit
        dem Herzen bei der Sache sind. Die verstehen, dass Design mehr
        ist als Dekoration – es ist Kommunikation, Leidenschaft und
        Liebe.</p>
    </div>
    <div class="section">
      <p class="t-reveal">&#169; Dariusz Tomaszewski</p>
    </div>

  </div>
</div>

</div>

</main>

<style>

main {
  inset: 0;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  pointer-events: none;
}

header {
  width: 100%;
  top: 0;
  position: static;
}

/* .daro {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
} */

.year {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: static;
}

/* .letter {
  font-size: 32vw;
  line-height: 0.8;
  display: inline-block;
  margin: 0;
  padding: 0;
} */

.letter2 {
  font-size: 32vw;
  line-height: 0.8;
  display: inline-block;
  margin: 0;
  padding: 0;
}

.about-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10rem;
  padding-bottom: 5rem;
}

.spacer {
  display: block;
  width: 100%;
}

.about {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Zwei gleich breite Spalten */
  gap: 2rem; /* Abstand zwischen den Spalten */
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.section + .section {
  margin-top: 2rem;
}

.about p {
  text-align: justify;
  hyphens: auto;
  font-size: 1vw;
  line-height: 1.35;
}

.portrait {
  width: 100%;
  height: auto;
  margin-top: 2rem;
  object-fit: cover;
}

.about-reveal {
  will-change: transform, opacity;
}

.t-reveal {
  will-change: opacity;
}

@media (max-width: 1024px) {
  main {
    margin-top: 2rem;
  }
  .about-wrapper {
  padding-right: 0;
  }
  .spacer {
  display: none;
  }
  /* .letter {
  font-size: 33.5vw;
  } */
  .letter2 {
  font-size: 49vw;
  }
  .year {
  justify-content: center;
  }
}

@media (max-width: 768px) {
  .about {
    grid-template-columns: 1fr;
  }
  .about p {
  font-size: 2vw;
  }
  /* .letter {
  font-size: 33vw;
  } */
  .letter2 {
  font-size: 49vw;
  }
  .year {
  justify-content: center;
  }
}

@media (max-width: 450px) {
  .about p {
  font-size: 3vw;
  }
  /* .letter {
  font-size: 31.75vw;
  } */
  .letter2 {
  font-size: 48vw;
  }
  .year {
  justify-content: center;
  }
}

</style>
