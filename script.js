const container = document.getElementById('loveContainer');
const columnWidth = 120;
const columnCount = Math.floor(window.innerWidth / columnWidth);
const lineCount = 20;

for (let i = 0; i < columnCount; i++) {
  const column = document.createElement('div');
  column.classList.add('column');

  if (i % 3 === 0) column.classList.add('diagonal');
  else if (i % 2 === 0) column.classList.add('down');

  const stream = document.createElement('div');
  stream.classList.add('text-stream');

  for (let j = 0; j < lineCount; j++) {
    const line = document.createElement('div');
    line.textContent = 'I Love You';
    line.classList.add('wavy');
    stream.appendChild(line);
  }

  stream.style.setProperty('--delay', `${Math.random() * 5}s`);
  column.appendChild(stream);
  container.appendChild(column);
}

// Floating text + fireworks on click
document.body.addEventListener('click', (e) => {
  const floatingText = document.createElement('div');
  floatingText.className = 'floating-text';
  floatingText.textContent = 'My girl Daria';
  floatingText.style.left = e.clientX + 'px';
  floatingText.style.top = e.clientY + 'px';
  document.body.appendChild(floatingText);
  setTimeout(() => floatingText.remove(), 3000);

  for (let i = 0; i < 20; i++) {
    const spark = document.createElement('div');
    spark.className = 'firework';
    spark.style.left = `${e.clientX}px`;
    spark.style.top = `${e.clientY}px`;
    const angle = Math.random() * 2 * Math.PI;
    const distance = 80 + Math.random() * 40;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    spark.style.setProperty('--x', `${x}px`);
    spark.style.setProperty('--y', `${y}px`);
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 600);
  }
});

// Falling hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.fontSize = (Math.random() * 10 + 10) + 'px';
  heart.textContent = '❤️';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 300);
