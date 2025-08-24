//region: wavy animation

const wavelength = 2000;     // period = vw
const height = 800;

const svg = document.getElementById("wave");
svg.setAttribute("viewBox", `0 0 ${wavelength} ${height}`);


const amplitude = 30;         
const speed = 0.02;          
const points = 200;           
let phase = 0;           

let ripples = [];

// 鼠标触发扰动
window.addEventListener("mousemove", e => {
  ripples.push({
    x: e.clientX,           // 初始位置
    strength: 10,           // 初始振幅
    decay: 0.98,            // 每帧衰减
    spread: 50,            // 扰动影响范围
    drift: -8               // 水平漂移速度（负数表示向左）
  });
});

function getY(x) {

  let y = Math.sin((x / wavelength) * 2 * Math.PI + phase) * amplitude;

  // 叠加扰动
  for (let r of ripples) {
    const dx = x - r.x;
    const influence = Math.exp(-(dx * dx) / (2 * r.spread * r.spread));
    y += r.strength * influence;
  }

  return height / 2 + y;
}

// 绘制波形
function drawWave() {
  const step = wavelength / points;
  let d = `M 0 ${getY(0)}`;
  for (let i = 1; i <= points; i++) {
    const x = i * step;
    d += ` L ${x} ${getY(x)}`;
  }
  // 闭合到底部形成填充
  d += ` L ${wavelength} ${height} L 0 ${height} Z`;
  document.getElementById("wave-path").setAttribute("d", d);
}

function animate() {
  phase += speed;

  // 更新并衰减扰动
  ripples = ripples
    .map(r => ({
      ...r,
      x: r.x + r.drift,             // 随波漂移
      strength: r.strength * r.decay
    }))
    .filter(r => Math.abs(r.strength) > 0.1);

  drawWave();
  requestAnimationFrame(animate);
}

animate();


