import { useState, useEffect, useRef } from "react";

export function useCountUp(target: number, duration = 2000, triggerRef: React.RefObject<HTMLElement | null>) {
  const [count, setCount] = useState(0);
  const triggered = useRef(false);

  useEffect(() => {
    if (!triggerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return count;
}
