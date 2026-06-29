import { useEffect, useRef, useState } from "react";

/**
 * A circular cursor that smoothly follows the mouse and grows when hovering
 * interactive elements. Only renders on fine-pointer (desktop) devices so
 * touch users keep their native behaviour.
 */
export function CursorRing() {
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor");

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let curX = targetX;
    let curY = targetY;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const isInteractive = (el: EventTarget | null) =>
      el instanceof Element &&
      el.closest("a, button, input, textarea, select, [data-cursor]");

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target)) ring.current?.classList.add("cursor-grow");
    };
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target)) ring.current?.classList.remove("cursor-grow");
    };

    const loop = () => {
      curX += (targetX - curX) * 0.2;
      curY += (targetY - curY) * 0.2;
      if (ring.current) {
        ring.current.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  if (!enabled) return null;
  return <div ref={ring} className="cursor-ring" aria-hidden="true" />;
}
