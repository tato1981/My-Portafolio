export function initParticles(containerId: string, particleCount = 40) {
  const container = document.getElementById(containerId);
  if (!container) return;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = 15 + Math.random() * 10;
    const size = 2 + Math.random() * 3;

    Object.assign(particle.style, {
      left: `${left}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: ['rgba(59,130,246,0.7)','rgba(139,92,246,0.7)','rgba(6,182,212,0.7)'][Math.floor(Math.random()*3)]
    } as CSSStyleDeclaration);

    container.appendChild(particle);
  }
}
