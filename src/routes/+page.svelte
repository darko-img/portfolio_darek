<script lang="ts">

import { onMount } from 'svelte';
import { textReveal } from '$lib/animations/gsap';
import { isMobile } from '$lib/stores/device';

let canvas: HTMLCanvasElement;

function checkIsMobile() {
  return window.innerWidth <= 450;
}

function handleResize() {
  const mobile = checkIsMobile();
  isMobile.set(mobile);

  textReveal(mobile ? ".info-block-mobile .text-reveal" : ".info-block .text-reveal");
}

onMount(() => {
  // Initial prüfen
  handleResize();

  // Event Listener registrieren
  window.addEventListener('resize', handleResize);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.strokeStyle = "#BADA55";
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  if (window.innerWidth <= 1024) {
    ctx.lineWidth = 65;
  } else {
    ctx.lineWidth = 100;
  }

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let hue = 0;

  function drawLine(x: number, y: number) {
    if (!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    [lastX, lastY] = [x, y];
    hue = (hue + 1) % 360;
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Maussteuerung
  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });

  canvas.addEventListener("mousemove", (e) => drawLine(e.offsetX, e.offsetY));
  canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    clearCanvas();
  });
  canvas.addEventListener("mouseout", () => {
    isDrawing = false;
    clearCanvas();
  });

  // Touchsteuerung
  canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    isDrawing = true;
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    lastX = touch.clientX - rect.left;
    lastY = touch.clientY - rect.top;
  }, { passive: false });

  canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    if (!isDrawing) return;
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    drawLine(x, y);
  }, { passive: false });

  canvas.addEventListener("touchend", () => {
    isDrawing = false;
    clearCanvas();
  });

  canvas.addEventListener("touchcancel", () => {
    isDrawing = false;
    clearCanvas();
  });
  return () => {
    // Event Listener wieder entfernen bei Komponentenzerstörung
    window.removeEventListener('resize', handleResize);
  };
});

</script>

<canvas bind:this={canvas} class="canvas"></canvas>

<div class="info-block">
  <div class="info-text 1">

    <div class="text-wrapper">
      <h1 class="text-reveal">Grafikdesigner aus Berlin mit Fokus auf Motion Design</h1>
    </div>

    <div class="text-wrapper">
      <h1 class="text-reveal">und wachsender Begeisterung für Front-End-Webentwicklung.</h1>
    </div>

    <div class="text-wrapper">
      <h1 class="text-reveal">An der Schnittstelle von Design und Technologie,</h1>
    </div>

    <div class="text-wrapper">
      <h1 class="text-reveal">erstelle ich dynamische Komponenten für die digitale Welt.</h1>
    </div>

  </div>

  <div class="info-text 2">

    <div class="text-wrapper">
      <h1 class="text-reveal">Derzeit arbeite ich mit verschiedensten Programmiersprachen</h1>
    </div>

    <div class="text-wrapper">
      <h1 class="text-reveal">und Javascript-Bibliotheken wie Three.js oder GSAP.</h1>
    </div>

    <div class="text-wrapper">
      <h1 class="text-reveal">Durch interaktive Gestaltung und bewegte Elemente möchte</h1>
    </div>

    <div class="text-wrapper">
      <h1 class="text-reveal">ich besondere Nutzererlebnisse schaffen.</h1>
    </div>

  </div>

  <div class="info-text 3">

    <div class="text-wrapper">
      <h2 class="text-reveal">Für generelle Anfragen – oder wenn du wissen willst,</h2>
    </div>

    <div class="text-wrapper">
      <h2 class="text-reveal">wo es den besten Burger in Berlin gibt – bin ich</h2>
    </div>

    <div class="text-wrapper">
      <h2 class="text-reveal">jederzeit per E-mail erreichbar.</h2>
    </div>

  </div>
</div>

<div class="info-block-mobile">
  <div class="info-text 1">

    <div class="text-wrapper">
      <h1 class="text-reveal">Grafikdesigner aus Berlin mit Fokus auf</h1>
    </div>

    <div class="text-wrapper">
      <h1 class="text-reveal">Motion Design und wachsender</h1>
    </div>

    <div class="text-wrapper">
      <h1 class="text-reveal">Begeisterung für Front-End-</h1>
    </div>

    <div class="text-wrapper">
      <h1 class="text-reveal">Webentwicklung. An der Schnittstelle</h1>
    </div>

    <div class="text-wrapper">
      <h1 class="text-reveal">von Design und Technologie,</h1>
    </div>

    <div class="text-wrapper">
      <h1 class="text-reveal">erstelle ich dynamische Komponenten</h1>
    </div>

    <div class="text-wrapper">
      <h1 class="text-reveal">für die digitale Welt.</h1>
    </div>

  </div>

  <div class="info-text 2">

    <div class="text-wrapper">
      <h1 class="text-reveal">Derzeit arbeite ich mit verschiedensten</h1>
    </div>

    <div class="text-wrapper">
      <h1 class="text-reveal">Programmiersprachen und</h1>
    </div>

    <div class="text-wrapper">
      <h1 class="text-reveal">Javascript-Bibliotheken wie Three.js</h1>
    </div>

    <div class="text-wrapper">
      <h1 class="text-reveal">oder GSAP. Durch interaktive</h1>
    </div>

    <div class="text-wrapper">
      <h1 class="text-reveal">Gestaltung und bewegte Elemente</h1>
    </div>

    <div class="text-wrapper">
      <h1 class="text-reveal">möchte ich besondere Nutzererlebnisse</h1>
    </div>

    <div class="text-wrapper">
      <h1 class="text-reveal">schaffen.</h1>
    </div>

  </div>

  <div class="info-text 3">

    <div class="text-wrapper">
      <h2 class="text-reveal">Für generelle Anfragen – oder wenn du</h2>
    </div>

    <div class="text-wrapper">
      <h2 class="text-reveal">wissen willst, wo es den besten</h2>
    </div>

    <div class="text-wrapper">
      <h2 class="text-reveal">Burger in Berlin gibt – bin ich jederzeit</h2>
    </div>

    <div class="text-wrapper">
      <h2 class="text-reveal">per E-mail erreichbar.</h2>
    </div>

  </div>
</div>

<style>

canvas {
    position: absolute;
    inset: 0;
    width: 100vw;
    height: 100vh;

    z-index: 1;
  }

  .info-block {
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    pointer-events: none;

    z-index: 0;
  }

  .info-block-mobile {
    position: fixed;
    display: none;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    pointer-events: none;

    z-index: 0;
  }

  /* .info-block-mobile h1,
  .info-block-mobile h2 {
  letter-spacing: -0.01em;
  } */


@media (max-width: 1024px) {

  h1, h2 {
  font-size: 2vw;
  font-style: normal;
  }
}

@media (max-width: 450px) {

  .info-block {
    display: none;
  }

  .info-block-mobile {
  margin-top: 4rem;
  display: flex;
  }

  h1, h2 {
  font-size: 3.2vw;
  font-style: normal;
  }

  .info-block-mobile h1,
  .info-block-mobile h2 {
  font-size: 5vw;
  font-style: normal;
  }
}

</style>
