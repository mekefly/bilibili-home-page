import classNames from "classnames";
import { CSSProperties, useEffect, useState } from "react";
import { SwitchProps, useSwitchState } from "./Switch";
import "./Switch__TrackSwitch.scss";

export default function (props: SwitchProps) {
  const switchState = useSwitchState(props);
  const { sliderStyle } = useSlider(switchState);

  const { values, focusIndex, handelClick, buttonDoms } = switchState;
  return (
    <div className="switch--track-switch">
      <div className="slider background" style={sliderStyle}></div>
      {values.map((item, index) => (
        <button
          className={classNames("background", {
            "is-active": index === focusIndex,
          })}
          key={item}
          ref={(el) => {
            buttonDoms[index] = el as any;
          }}
          onClick={() => handelClick(index)}
        >
          <span className="value">{item}</span>
        </button>
      ))}
    </div>
  );
}

function useSlider(switchState: ReturnType<typeof useSwitchState>) {
  const { buttonDoms, focusIndex } = switchState;
  const [sliderStyle, setSwitchStyle] = useState({} as CSSProperties);

  useEffect(() => {
    const buttonDom = buttonDoms?.[focusIndex];

    if (!buttonDom) return;
    const rect = buttonDom.getBoundingClientRect();
    setSwitchStyle({
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      transform: `translateX(${buttonDom.offsetLeft}px)`,
    });
  }, [buttonDoms, focusIndex]);
  return { sliderStyle };
}
