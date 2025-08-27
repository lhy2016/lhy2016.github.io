const wavelength = 2000; 
const height = 800;

const svg = document.getElementById("wave");
svg.setAttribute("viewBox", `0 0 ${wavelength} ${height}`);

const wavePath = document.getElementById("wave-path");

const amplitude = 30;         
const speed = 0.02;          
const points = 250;           
let phase = 0;           

let ripples = [];

let lastMousePos = null;
let lastTime = null;

function convertToSvgX(clientX) {
  const rect = wavePath.getBoundingClientRect();
  return ((clientX - rect.left) / rect.width) * wavelength;
}

wavePath.addEventListener("mouseleave", () => {
  lastMousePos = null; 
});

// mouse triggered ripple
wavePath.addEventListener("mousemove", (e) => {
  const svgX = convertToSvgX(e.clientX);
  if (!lastMousePos) {
    lastMousePos = { x: svgX, y: e.clientY };
    return;
  }

  const dy = e.clientY - lastMousePos.y;
  const dx = svgX - lastMousePos.x;
  
  let strength = Math.min(Math.max(dy * 1.5 , -500), 500);
  let spread = 80;

  lastMousePos = { x: svgX, y: e.clientY};

  if (lastTime === null) {
    
    ripples.push({
      x: svgX,
      strength: strength,
      decay: 0.98,
      spread: spread,
      drift: -8,
    })
    
    lastTime = setTimeout(() => {
      lastTime = null;
    }, 20);
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
  wavePath.setAttribute("d", d);
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
  //requestAnimationFrame(animate);
}

animate();


