import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { getHomeMerryGoRound } from "../api/HomeMerryGoRound";
import { useFetchState, useFlexibleRange } from "../utils/reactUse";
import "./HomeMerryGoRound.scss";

export default function HomeMerryGoRound() {
  const [list = [], setList] = useFetchState(() => getHomeMerryGoRound());

  const {
    renderIndex,
    renderList,
    index,
    updateRenderList,
    disableTransition,
    left,
    right,
    direction,
  } = useCarouselData(list);

  const [disableAnimation, setDisableAnimation] = useState(false);
  useEffect(() => {
    setDisableAnimation(false);
  }, [index]);

  return (
    <div className="home-merry-go-round">
      <div
        className="container"
        onTransitionEnd={updateRenderList}
        style={{
          transitionDuration: disableTransition ? "0s" : undefined,
          transform: `translate(${-100 * renderIndex}%)`,
        }}
      >
        {renderList.map((item, id) => (
          <div key={item.id} className="carousel-slide">
            <img src={item.imgUrl} alt={item.describe} />
          </div>
        ))}
      </div>
      <div className="footer">
        <div
          className="describe"
          style={{
            fontSize: `${useFlexibleRange(16, 25)}px`,
            height: `${useFlexibleRange(25, 55)}px`,
            lineHeight: `${useFlexibleRange(25, 55)}px`,
          }}
        >
          {list[index]?.describe ?? ""}
        </div>
        <ul
          className="not-gray"
          style={{
            gridTemplateColumns: `repeat(${list.length}, var(--size))`,
          }}
        >
          <div
            className={classNames("pac-man", {
              animation: !disableAnimation,
              left: direction === "Left",
            })}
            onAnimationEnd={() => setDisableAnimation(true)}
            style={{
              gridColumn: `${index + 1}/span 1`,
              gridRow: `1/span 1`,
            }}
          ></div>
          {list.map((item, i) => (
            <li
              key={i}
              style={{
                gridColumn: `${i + 1}/span 1`,
                gridRow: `1/span 1`,
              }}
            ></li>
          ))}
        </ul>
        <div className="buttons">
          <button onClick={left}>
            <LeftIcon></LeftIcon>
          </button>
          <button onClick={right}>
            <RightIcon></RightIcon>
          </button>
        </div>
      </div>
    </div>
  );
}
function LeftIcon() {
  return (
    <svg
      t="1664155036842"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4164"
      width="200"
      height="200"
    >
      <path
        d="M384 512l347.733-309.333C748.8 187.733 750.933 160 736 142.933c-14.933-17.066-42.667-19.2-59.733-4.266L292.267 480c-10.667 8.533-14.934 19.2-14.934 32s4.267 23.467 14.934 32l384 341.333C684.8 891.733 695.467 896 704 896c12.8 0 23.467-4.267 32-14.933 14.933-17.067 14.933-44.8-4.267-59.734L384 512z"
        fill="currentColor"
        p-id="4165"
      ></path>
    </svg>
  );
}
function RightIcon() {
  return (
    <svg
      t="1664154996409"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3702"
      width="200"
      height="200"
    >
      <path
        d="M731.733333 480l-384-341.333333c-17.066667-14.933333-44.8-14.933333-59.733333 4.266666-14.933333 17.066667-14.933333 44.8 4.266667 59.733334L640 512 292.266667 821.333333c-17.066667 14.933333-19.2 42.666667-4.266667 59.733334 8.533333 8.533333 19.2 14.933333 32 14.933333 10.666667 0 19.2-4.266667 27.733333-10.666667l384-341.333333c8.533333-8.533333 14.933333-19.2 14.933334-32s-4.266667-23.466667-14.933334-32z"
        p-id="3703"
        fill="currentColor"
      ></path>
    </svg>
  );
}
function useCarouselData<T extends any[]>(list: T) {
  const [disableClick, setDisableClick] = useState(false);
  const [disableTransition, setDisableTransition] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentDomIndex, setCurrentDomIndex] = useState(0);
  const [direction, setDirection] = useState("Right" as "Left" | "Right");
  const renderList = useMemo(() => {
    const ret = [];
    const len = list.length;
    let lastCurrent = currentDomIndex - 2;
    let updateCurrent = () => {
      // if len = 7
      // (-1 + len) % len = 6
      const current = (lastCurrent = (lastCurrent + 1 + len) % len);
      return current;
    };
    for (let i = 0; i < len; i++) {
      const current = updateCurrent();
      ret.push(list[current]);
    }
    return ret;
  }, [currentDomIndex, list]);

  const [renderIndex, setRenderIndex] = useState(1);

  function initRenderIndex() {
    setRenderIndex(1);
  }

  function updateRenderList() {
    setDisableTransition(true);

    setCurrentDomIndex(index);
    initRenderIndex();

    //取消禁止再次单击的事件
    setDisableClick(false);
  }
  function updateIndex(renderIndex: number) {
    const len = list.length;

    return setIndex((index + renderIndex - 1 + len) % len);
  }

  function left() {
    if (disableClick) {
      return;
    }
    //禁止单击left和right按钮
    setDisableClick(true);

    setDisableTransition(false);
    setRenderIndex(renderIndex - 1);
    updateIndex(renderIndex - 1);
    setDirection("Left");
  }
  function right() {
    if (disableClick) {
      return;
    }
    //禁止单击left和right按钮
    setDisableClick(true);

    setDisableTransition(false);
    setRenderIndex((prev) => prev + 1);
    updateIndex(renderIndex + 1);

    setDirection("Right");
  }

  useEffect(() => {
    const outer = setTimeout(right, 3000);
    return () => {
      clearTimeout(outer);
    };
  }, [right]);
  return {
    renderList,
    left,
    right,
    index,
    renderIndex,
    updateRenderList,
    disableTransition,
    direction,
  };
}
