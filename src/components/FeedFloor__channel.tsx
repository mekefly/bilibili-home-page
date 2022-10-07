import { useMemo } from "react";
import {
  CardData,
  ChannelType,
  getChannelVideoCardDataList,
} from "../api/HomeVideoCardImg";
import { useFetchState } from "../utils/reactUse";
import FeedFloorList from "./FeedFloorList";
import FeedFloor__Recommend from "./FeedFloor__Recommend";

type Props = {
  rows?: number;
  type?: ChannelType;
};
export default function ({ rows = 1, type = ChannelType.国创 }: Props) {
  const [channelVideoCardDataList] = useFetchState(() =>
    getChannelVideoCardDataList(type)
  );
  const groupingData = useMemo(() => {
    if (
      !(
        channelVideoCardDataList?.groupWithUpdateWeek ||
        channelVideoCardDataList?.withGrouping
      )
    )
      return;
    const map: { [key: string | number]: CardData[] } = {};
    const cardData = channelVideoCardDataList?.cardData;
    if (!cardData) return;
    cardData.forEach((cardData) => {
      const groupings = cardData.grouping ?? [];
      groupings.forEach((grouping) => {
        const value = map[grouping] ?? (map[grouping] = []);
        value.push(cardData);
      });
    });
    return map;
  }, [channelVideoCardDataList?.cardData]);
  return (
    <>
      <FeedFloorList
        className="channel"
        rows={rows}
        cardData={channelVideoCardDataList?.cardData}
        groupingData={groupingData}
        useUpdateTimeGroup={channelVideoCardDataList?.groupWithUpdateWeek}
        withHeader={true}
        completion={false}
        name={type}
        href={"https://www.bilibili.com/match/home"}
        moreUrl="https://www.bilibili.com/match/home"
        svg={"channelCompetition"}
      ></FeedFloorList>
      <FeedFloor__Recommend />
    </>
  );
}
