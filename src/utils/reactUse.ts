import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { flexibleRange } from "./flixible";

export function useFlexibleRange(...rest: Parameters<typeof flexibleRange>) {
  const [number, setNumber] = useState(() => flexibleRange(...rest));
  const resize = useCallback(() => {
    setNumber(flexibleRange(...rest));
  }, [number]);

  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize]);
  return number;
}

export function useFetchState<T extends any>(
  fetch: () => T,
  effect?: () => any
): [Awaited<T> | undefined, Dispatch<SetStateAction<Awaited<T> | undefined>>] {
  const state = useState(undefined) as any;
  const [s, setS] = state;
  useEffect(() => {
    Promise.resolve(fetch()).then((v) => setS(v));
    return effect;
  }, []);
  return state;
}

export function useLimit<E extends any>(
  list: E[],
  limit: number,
  completion: boolean = true
) {
  const l: Array<E | null> = [...list];

  if (completion) {
    while (l.length < limit) {
      l.push(null);
    }
  }

  return l.slice(0, limit);
}
