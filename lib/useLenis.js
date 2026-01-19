import { useEffect } from 'react';
import Lenis from 'lenis'

let lenisInstance = null;

export function useLenis() {
  useEffect(() => {
    if (lenisInstance) return;

    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
      }
    };
  }, []);

  return lenisInstance;
}

export function scrollTo(target) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target);
  }
}
