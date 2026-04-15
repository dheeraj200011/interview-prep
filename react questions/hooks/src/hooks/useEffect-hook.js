// custom useEffect polyfill
import { useRef } from "react";

const useCustomUseEffect = (cb, deps) => {
  // track karta hai component ka first render
  const isFirstRender = useRef(true);

  // previous dependencies store karega
  const prevDeps = useRef([]);

  // cleanup function store karega
  const cleanupRef = useRef(null);

  // first render logic
  if (isFirstRender.current) {
    isFirstRender.current = false;

    // effect run karo aur cleanup store karo
    cleanupRef.current = cb();

    // dependencies store karo
    prevDeps.current = deps || [];

    return;
  }

  // dependency change check
  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

  // agar dependency change hui
  if (depsChanged) {
    // pehle previous cleanup run karo
    if (cleanupRef.current && typeof cleanupRef.current === "function") {
      cleanupRef.current();
    }

    // new effect run karo aur cleanup store karo
    cleanupRef.current = cb();

    // dependencies update karo
    prevDeps.current = deps || [];
  }
};

export default useCustomUseEffect;
