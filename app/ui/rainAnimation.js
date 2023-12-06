export function rainAnimation() {
    
    const container = document.querySelector('.navMain');

    function createRaindrop() {
      const raindrop = document.createElement('span');
      raindrop.classList.add('raindrop');
      raindrop.style.left = Math.random() * 100 + '%';
      raindrop.style.transform = `rotate(${Math.random() * 180 - 45}deg)`;
      raindrop.style.animationDuration = Math.random() * 4 + 2 + 's';
      raindrop.style.opacity = Math.random();
      container.appendChild(raindrop);
  
      setTimeout(() => {
        raindrop.remove();
      }, 3000);
    }
  
    setInterval(createRaindrop, 100);
  }