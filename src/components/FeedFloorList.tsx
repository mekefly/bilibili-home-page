import classNames from "classnames";
import { useCallback, useMemo, useState } from "react";
import { CardData } from "../api/HomeVideoCardImg";
import { useLimit } from "../utils/reactUse";
import BiliHomeGrid from "./BiliHomeGrid";
import { ChannelButton } from "./ChannelButton";
import "./FeedFloorList.scss";
import HomeVideoCard from "./HomeVideoCard";
import { svgMap } from "./svg";
import Switch__MouseSwitch from "./Switch__MouseSwitch";
import Switch__TrackSwitch from "./Switch__TrackSwitch";

type Props = {
  rows?: number;
  cardData?: CardData[];
  className?: string;
  groupingData?: { [key: string | number]: CardData[] };
  useUpdateTimeGroup?: boolean;
  completion: boolean;
  children?: { left: () => JSX.Element; right: () => JSX.Element };
} & HeaderProps;
export default function (props: Props) {
  const {
    rows = 1,
    cardData = [],
    className,
    children,
    withHeader,
    groupingData,
    useUpdateTimeGroup = false,
    completion,
  } = props;
  const [columns, setColumns] = useState(0);
  const [focusIndex, setFocusIndex] = useState(0);
  const switchValueList = useMemo(() => {
    return Object.entries(groupingData ?? {}).map(([key, value]) => key);
  }, [groupingData]);
  const getGroupKey = useMemo(
    () => switchValueList[focusIndex],
    [switchValueList, focusIndex]
  );

  const cardDataList = useLimit(
    useMemo(() => {
      if (groupingData) {
        if (useUpdateTimeGroup) {
          return groupingData[getGroupKey] ?? [];
        }
        return groupingData[getGroupKey] ?? [];
      } else {
        return cardData;
      }
    }, [groupingData, cardData, getGroupKey, useUpdateTimeGroup]),
    rows * columns,
    completion
  );
  const updateFocusIndexRef = useCallback((v: number) => {
    setFocusIndex(v);
  }, []);

  return (
    <div className="feed-floor-list">
      <Header
        {...props}
        switchValueList={switchValueList}
        onUpdateIndex={updateFocusIndexRef}
        useGrouping={!!groupingData}
      ></Header>
      <BiliHomeGrid
        className={classNames(className)}
        updateColumns={setColumns}
      >
        {cardDataList.map((data) => (
          <HomeVideoCard
            key={data?.id ?? Math.random()}
            cardData={data}
          ></HomeVideoCard>
        ))}
      </BiliHomeGrid>
    </div>
  );
}

type HeaderProps = {
  withHeader?: boolean;
  name?: string;
  href?: string;
  svg?: keyof typeof svgMap;
  moreUrl?: string;
  timetableUrl?: string;
  switchValueList?: string[];
  useUpdateTimeGroup?: boolean;
  useGrouping?: boolean;
  onUpdateIndex?: (index: number) => void;
};
function Header(props: HeaderProps) {
  if (!props.withHeader) {
    return <></>;
  }

  const { name = "", useUpdateTimeGroup = false, onUpdateIndex } = props;
  function Svg() {
    if (!props.svg) return <></>;
    let Svg = svgMap[props.svg];
    return <Svg className="svg" />;
  }
  return (
    <div className="feed-floor-list-header">
      <div className="left">
        {Svg()}
        <a className="name" href={props.href}>
          <span>{name}</span>
        </a>
        {useUpdateTimeGroup && (
          <Switch__TrackSwitch
            onUpdate={(_, index) => {
              onUpdateIndex?.(index);
            }}
            values={[
              "最近更新",
              "周一",
              "周二",
              "周三",
              "周四",
              "周五",
              "周六",
              "周日",
            ]}
          />
        )}
        {props.useGrouping && !useUpdateTimeGroup && (
          <Switch__MouseSwitch
            onUpdate={(_, index) => {
              onUpdateIndex?.(index);
            }}
            values={props.switchValueList}
          />
        )}
      </div>
      <div className="right">
        {props.moreUrl && (
          <ChannelButton href={props.moreUrl} className="button">
            查看更多
            <svgMap.widgetArrow style={{ height: `1em` }} />
          </ChannelButton>
        )}
      </div>
    </div>
  );
}
