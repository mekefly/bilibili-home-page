import classNames from "classnames";
import { HTMLAttributes, useEffect } from "react";
import { useFlexibleRange } from "../utils/reactUse";
import "./BiliHomeGrid.scss";
interface Props {
  className?: string;
  updateColumns?: (v: number) => void;
  style?: HTMLAttributes<any>["style"];
  children?: any;
  minColumns?: number;
  maxColumns?: number;
}

export default function ({
  className,
  updateColumns,
  style,
  children,
  minColumns = 3,
  maxColumns = 5,
}: Props) {
  const columns = useFlexibleRange(minColumns, maxColumns);

  useEffect(() => {
    updateColumns?.(columns);
  }, [updateColumns, columns]);

  return (
    <div
      className={classNames("bili-home-grid", className)}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridGap: `20px`,
        width: `100%`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
