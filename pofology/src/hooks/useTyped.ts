import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface UseTypedOptions {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  startDelay?: number;
  backDelay?: number;
  smartBackspace?: boolean;
}

export const useTyped = (options: UseTypedOptions) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      typedRef.current = new Typed(elementRef.current, {
        strings: options.strings,
        typeSpeed: options.typeSpeed || 50,
        backSpeed: options.backSpeed || 50,
        loop: options.loop || false,
        startDelay: options.startDelay || 0,
        backDelay: options.backDelay || 700,
        smartBackspace: options.smartBackspace || true,
      });
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, [options]);

  return elementRef;
};