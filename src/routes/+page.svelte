<script lang="ts">
  import { onMount } from 'svelte';
  import { textReveal } from '$lib/animations/gsap';

  let canvas: HTMLCanvasElement;

  onMount(() => {
  textReveal();

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.strokeStyle = "#BADA55";
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  // Line width abhängig von der Gerätegröße
  if (window.innerWidth <= 1024) {
    ctx.lineWidth = 60;
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
      <h1 class="text-reveal">ich besondere Nutzererlebnisse im Web schaffen.</h1>
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


<style>

canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;

    z-index: 0;
  }

  .info-block {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    pointer-events: none;
  }


@media (max-width: 1024px) {

  h1, h2 {
  font-size: 2vw;
  line-height: 1.2;
  font-style: normal;
  }
}



@media (max-width: 390px) {

  .info-block {
    margin-top: 5rem;
  }

  h1, h2 {
  font-size: 3.2vw;
  line-height: 1.35;
  font-style: normal;
  }
}

</style>
