const container = document.querySelector('.rain-container');
const dropCount = 100;

for (let i = 0; i < dropCount; i++) {
  const drop = document.createElement('div');
  drop.classList.add('blood-drop');
  drop.style.left = `${Math.random() * 100}vw`;
  drop.style.animationDuration = `${1 + Math.random() * 2}s`;
  drop.style.animationDelay = `${Math.random() * 5}s`;
  container.appendChild(drop);
}
