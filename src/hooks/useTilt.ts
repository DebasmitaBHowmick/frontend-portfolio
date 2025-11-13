import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

// Create your own type for VanillaTilt config
export interface TiltOptions {
  max?: number;
  speed?: number;
  scale?: number;
  glare?: boolean;
  "max-glare"?: number;
}

// Extend HTMLDivElement to include vanillaTilt
type TiltElement = HTMLDivElement & {
  vanillaTilt?: {
    destroy: () => void;
  };
};

export const useTilt = (options: TiltOptions) => {
  const tiltRef = useRef<TiltElement | null>(null);

  useEffect(() => {
    const node = tiltRef.current; // store ref value safely

    if (node) {
      VanillaTilt.init(node, options);
    }

    return () => {
      node?.vanillaTilt?.destroy();
    };
  }, [options]);

  return tiltRef;
};


