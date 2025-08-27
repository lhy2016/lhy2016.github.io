const wavelength = 2000; 
const height = 800;

const svg = document.getElementById("wave");
svg.setAttribute("viewBox", `0 0 ${wavelength} ${height}`);

const wavePath = document.getElementById("wave-path");

const amplitude = 30;         
const speed = 0.02;          
const points = 200;           
let phase = 0;           

let ripples = [];

let lastMousePos = null;
let lastTime = null;

// mouse triggered ripple
wavePath.addEventListener("mousemove", (e) => {

  if (!lastMousePos) {
    lastMousePos = { x: e.clientX, y: e.clientY};
    return;
  }

  const dy = e.clientY - lastMousePos.y;
  const dx = e.clientX - lastMousePos.x;
  let strength = Math.min(Math.max(dy, -9000), 9000);
  let spread = 80;
  //Math.min(Math.max(Math.abs(dx), 100), 200);
  let drift = -9;

  lastMousePos = { x: e.clientX, y: e.clientY};

  if (lastTime === null) {
    
    ripples.push({
      x: e.clientX,
      strength: strength,
      decay: 0.97,
      spread: spread,
      drift: drift,
    })
    
    

    lastTime = setTimeout(() => {
      lastTime = null;
    }, 30);
  }
});

function getY(x) {

  let y = Math.sin((x / wavelength) * 2 * Math.PI + phase) * amplitude;

  // add ripples
  for (let r of ripples) {
    const dx = x - r.x;
    const influence = Math.exp(-(dx * dx) / (2 * r.spread * r.spread));
    y += r.strength * influence;
  }

  return height / 2 + y;
}


function drawWave() {
  const step = wavelength / points;
  let d = `M 0 ${getY(0)}`;
  for (let i = 1; i <= points; i++) {
    const x = i * step;
    d += ` L ${x} ${getY(x)}`;
  }
  // Close the path
  d += ` L ${wavelength} ${height} L 0 ${height} Z`;
  document.getElementById("wave-path").setAttribute("d", d);
}

function animate() {
  phase += speed;

  // Update ripples
  ripples = ripples
    .map(r => ({
      ...r,
      x: r.x + r.drift,             // drift horizontally
      strength: r.strength * r.decay
    }))
    .filter(r => Math.abs(r.strength) > 0.1);

  drawWave();
  requestAnimationFrame(animate);
}

animate();


