<script>
  import { onMount } from 'svelte';
  import LocalFooter from '$lib/components/LocalProjectFooter.svelte';
  import { aboutReveal } from '$lib/animations/gsap';

  let showLocalFooter = false;

  onMount(() => {
    aboutReveal();

    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    showLocalFooter = mediaQuery.matches;

    const handler = (e) => {
      if (showLocalFooter !== e.matches) {
        showLocalFooter = e.matches;
      }
    };

    mediaQuery.addEventListener('change', handler);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  });
</script>

<main class="main">

<div class="about-wrapper">

<div class="spacer"></div>

<div class="about">

   <div class="year-row">
    <span class="letter about-reveal">1</span>
    <span class="letter about-reveal">9</span>
    <span class="letter about-reveal">9</span>
    <span class="letter about-reveal">1</span>
  </div>

  <div class="col-1">

    <div class="section">
      <p class="t-reveal">Geboren 1991 in Stettin, Polen, war ich
      schon früh der Junge, der immer ein Blatt Papier und einen
      Stift zur Hand hatte. Kunst war für mich mehr als nur Zeitvertreib –
      sie war mein Fenster zur Welt. Schon als Kind formte ich mit meinen Bildern
      kleine Welten – intuitiv, ohne Regeln, nur mit meiner Fantasie.
      Mit vier Jahren zog ich mit meiner Mutter nach Berlin – ganz spontan,
      ohne zu wissen, was uns erwartet. Die Stadt hat mich geprägt, ihr Rhythmus,
      ihre Farben, ihre Vielfalt.</p>
     </div>

    <div class="section">
        <img src="/darek.webp" alt="Dariusz Portrait" class="portrait" />
    </div>

    <div class="section">
      <p class="t-reveal">Heute bin ich Motion Designer und angehender Webdesigner –
        mit einer tiefen Leidenschaft für Gestaltung, die sich bewegt und
        verändert. Ich liebe es, Ideen nicht nur sichtbar, sondern
        auch erlebbar zu machen.</p>
    </div>

    <div class="section">
      <p class="t-reveal">2017 habe ich meinen Abschluss als Grafikdesigner am
        Lette-Verein in Berlin gemacht. Diese Ausbildung hat mir nicht nur fundierte
        technische Fähigkeiten vermittelt, sondern auch meinen gestalterischen
        Blick geschärft und meine kreative Persönlichkeit weiterentwickelt.
        Der Lette-Verein, mit seiner Mischung aus Tradition und Innovation, passte
        perfekt zu meiner eigenen Arbeitsweise und hat mich auf meinem Weg als
        Designer entscheidend geprägt.</p>
      </div>

    <div class="section">
    <img src="/in_den_bergen.webp" alt="In den Bergen" class="portrait" />
</div>

    <div class="section">
      <p class="t-reveal">Der Weg dahin war alles andere als linear.
        Ich habe ausprobiert, verworfen, neu angefangen. Was sich aber nie geändert hat:
        Mein Blick für Details und mein Wunsch, Emotionen durch Design
        auszulösen. Ich glaube fest daran, dass gutes Design nicht nur
        gut aussieht – sondern etwas in uns auslöst und gleichzeitig eine
        Funktion erfüllt, Design ist nie willkürlich, es ist eine Reise.
        Mutig, klar und aufregend.</p>
    </div>

  </div>

  <div class="col-2">

    <div class="section">
    <img src="/graffiti.webp" alt="Graffiti" class="portrait" />
</div>

    <div class="section">
      <p class="t-reveal">Gestaltung beginnt für mich mit Beobachtung – sei es in
        der Natur, in alten Schriften oder im Stadtbild. Ich mag den Kontrast
        zwischen Alt und Neu, zwischen Gefühl und System. Und: Gute
        Gestaltung lebt für mich von Interaktion – zwischen Nutzer*in und
        Objekt, zwischen Mensch und Medium.</p>
    </div>

    <div class="section">
      <p class="t-reveal">2025 habe ich erfolgreich ein Full-Stack-Web-Developer-Bootcamp
        bei Le Wagon in Berlin abgeschlossen. Diese intensive Ausbildung hat meine
        technischen Fähigkeiten erweitert und mir ermöglicht, kreative Konzepte auch digital
        ganzheitlich umzusetzen. Durch die Kombination aus Design- und Programmierkenntnissen
        kann ich heute Projekte gestalten, die nicht nur visuell überzeugen, sondern auch
        funktional und interaktiv sind.</p>
    </div>

    <div class="section">
    <img src="/lewagon.webp" alt="Abschluss LeWagon" class="portrait" />
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
        ist als Dekoration – es ist Kommunikation – und damit der Beginn jeder
        echten Beziehung zwischen Mensch und Idee.<br><br>

        &copy;2025 Dariusz Tomaszewski<br>Alle Rechte vorbehalten.</p>
      </div>

  </div>

</div>

</div>

{#if showLocalFooter}
  <div class="footer-wrapper">
    <LocalFooter />
  </div>
{/if}

</main>

<style>

main {
  inset: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;

  padding: 1rem 12rem 1rem 1rem;

  overscroll-behavior: none;
  -webkit-overflow-scrolling: auto;
}

.year-row {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  flex-wrap: nowrap;
}

.letter {
  font-size: 34vw;
  line-height: 0.8;
  white-space: nowrap;
  display: inline-block;
  margin: 0;
  padding: 0;
  transform: translateY(-5%);
}

.about-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* padding-bottom: 7rem; */
}

.spacer {
  display: block;
  width: 100%;
}

.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1000px;
  margin: 0 auto;
  gap: 1.5rem;
  position: relative;
}

.section + .section {
  margin-top: 1rem;
}

.about p {
  font-family: 'HelveticaNowDisplay';
  font-weight: 600;
  font-style: normal;

  text-align: justify;
  hyphens: auto;
  font-size: 1vw;
  line-height: 1.2;
}

.col-1 .section:first-of-type p {
  text-indent: 1.5em;
}

.portrait {
  width: 100%;
  height: auto;
  object-fit: cover;

  will-change: clip-path;
}

.about-reveal {
  will-change: transform, opacity;
}

.t-reveal {
  will-change: opacity;
}

@media (max-width: 3000px) {
  .about-wrapper {
  padding-bottom: 7rem;
  }
}

@media (max-width: 1024px) {
  .about-wrapper {
  padding-bottom: 0;
  }
  main {
  padding: 3rem 1rem 1rem 1rem;
  }
  .spacer {
  display: none;
  }
  .letter {
  font-size: 50vw;
  }
  .year-row {
  gap: 0;
  }
  .about p {
  font-size: 1.75vw;
  }
}

@media (max-width: 768px) {
  .about {
    grid-template-columns: 1fr;
  }
  .letter {
  font-size: 49vw;
  }
  .about {
  gap: 1rem;
  }
  .about p {
  font-size: 2.5vw;
  line-height: 1.25;
  }
}

@media (max-width: 450px) {
  .about p {
  font-size: 3.75vw;
  }
  .letter {
  font-size: 47vw;
  }
}

</style>
