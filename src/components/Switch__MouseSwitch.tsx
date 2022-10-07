import classNames from "classnames";
import { SwitchProps, useSwitchState } from "./Switch";

import "./Switch__MouseSwitch.scss";

export default function (props: SwitchProps) {
  const switchState = useSwitchState(props);

  const { values, focusIndex, handelClick, buttonDoms } = switchState;
  return (
    <div className="switch--mouse-switch">
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
