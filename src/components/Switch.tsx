import { useEffect, useState } from "react";
import "./Switch.scss";

export default function () {
  return;
}

export interface SwitchProps {
  values?: string[];
  onUpdate?: (value: string, index: number) => void;
}
export function useSwitchState(props: SwitchProps) {
  const { values = [], onUpdate } = props;
  const [focusIndex, setFocusIndex] = useState(0);

  const [buttonDoms, setButtonDoms] = useState([] as HTMLButtonElement[]);

  useEffect(() => {
    onUpdate?.(values[focusIndex], focusIndex);
  }, [focusIndex]);

  const handelClick = (index: number) => {
    setFocusIndex(index);
  };
  return {
    values,
    focusIndex,
    buttonDoms,
    handelClick,
  };
}
