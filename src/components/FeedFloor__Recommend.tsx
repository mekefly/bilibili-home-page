import { getRecommendedVideoCardDataList } from "../api/HomeVideoCardImg";
import { useFetchState } from "../utils/reactUse";
import FeedFloorList from "./FeedFloorList";

type Props = {
  rows?: number;
};
export default function ({ rows = 3 }: Props) {
  const [cardData] = useFetchState(() => getRecommendedVideoCardDataList());
  return (
    <FeedFloorList
      className="recommend"
      rows={rows}
      cardData={cardData}
    ></FeedFloorList>
  );
}
