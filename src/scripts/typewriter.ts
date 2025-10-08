export function initTypewriter(typeId: string, cursorId: string, phrases: string[], options?: { typingSpeed?: number; deletingSpeed?: number; holdDelay?: number }) {
  const typeEl = document.getElementById(typeId);
  const cursorEl = document.getElementById(cursorId);
  if (!(typeEl instanceof HTMLElement)) return;
  const type = typeEl as HTMLElement;

  const TYPING_SPEED = options?.typingSpeed ?? 80;
  const DELETING_SPEED = options?.deletingSpeed ?? 40;
  const HOLD_DELAY = options?.holdDelay ?? 1500;

  if (cursorEl instanceof HTMLElement) {
    cursorEl.style.transition = 'opacity 0.1s linear';
    setInterval(() => {
      cursorEl.style.opacity = cursorEl.style.opacity === '0' ? '1' : '0';
    }, 600);
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let typing = true;

  function tick() {
    const current = phrases[phraseIndex];
    if (typing) {
  charIndex++;
  type.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        typing = false;
        setTimeout(tick, HOLD_DELAY);
        return;
      }
      setTimeout(tick, TYPING_SPEED + Math.random() * 80);
    } else {
  charIndex--;
  type.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        typing = true;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, 200);
        return;
      }
      setTimeout(tick, DELETING_SPEED + Math.random() * 40);
    }
  }

  setTimeout(tick, 600);
}
