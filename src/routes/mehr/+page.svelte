<script>
  import { onMount } from 'svelte';
  import { aboutReveal } from '$lib/animations/gsap';

  onMount(() => {
    aboutReveal();
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
      <p class="t-reveal">Geboren 1991 in Stettin, Polen, war ich schon früh der Junge,
      der immer ein Blatt Papier und einen Stift zur Hand hatte.
      Kunst war für mich mehr als nur Zeitvertreib – sie war mein
      Fenster zur Welt. Mit vier Jahren zog ich mit meiner Mutter
      nach Berlin – ganz spontan, ohne zu wissen, was uns erwartet.
      Die Stadt hat mich geprägt, ihr Rhythmus, ihre Farben, ihre
      Vielfalt.</p>
     </div>

    <div class="section">
      <img src="/darek_jung.webp" alt="Dariusz Porträt" class="portrait" />
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
      <p class="t-reveal">Heute bin ich Motion Designer und angehender Webdesigner –
        mit einer tiefen Leidenschaft für Gestaltung, die sich bewegt und
        verändert. Ich liebe es, Ideen nicht nur sichtbar, sondern
        auch erlebbar zu machen.</p>
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
      <img src="/abschluss_lewagon.webp" alt="Abschluss LeWagon" class="portrait" />
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

        &copy; 2025 Dariusz Tomaszewski.<br>Alle Rechte vorbehalten.</p>
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
  /* outline: 1px solid red; */
}

.about-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-bottom: 7rem;
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
  gap: 1rem;
  position: relative;
}

.section + .section {
  margin-top: 1rem;
}

.about p {
  text-align: justify;
  hyphens: auto;
  font-size: 1vw;
  line-height: 1.35;
}

.col-1 .section:first-of-type p {
  text-indent: 2em;
}

.portrait {
  width: 100%;
  height: auto;
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
  padding: 2rem 1rem 1rem 1rem;
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
}

@media (max-width: 768px) {
  .about {
    grid-template-columns: 1fr;
  }
  .about p {
  font-size: 2vw;
  }
  .letter {
  font-size: 49vw;
  }
}

@media (max-width: 450px) {
  .about p {
  font-size: 3vw;
  }
  .letter {
  font-size: 47vw;
  }
}

</style>
