export function handleNavElementClick(e) {
        const navElement = e.currentTarget;
      
        const rippleEffect = document.createElement('span');
        rippleEffect.classList.add('ripple-effect');
      
        const diameter = Math.max(navElement.clientWidth, navElement.clientHeight);
        const radius = diameter / 2;
      
        const rect = navElement.getBoundingClientRect();
        const posX = Math.max(e.clientX - rect.left - radius);
        const posY = Math.max(e.clientY - rect.top - radius);
      
        rippleEffect.style.width = rippleEffect.style.height = `${diameter}px`;
        rippleEffect.style.left = `${posX}px`;
        rippleEffect.style.top = `${posY}px`;
      
        navElement.appendChild(rippleEffect);
      
        setTimeout(() => {
          navElement.removeChild(rippleEffect);
        }, 1000);
      }