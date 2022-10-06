import { getVideoCardDataList } from "../api/HomeVideoCardImg";
import { useFetchState, useFlexibleRange } from "../utils/reactUse";
import HomeMerryGoRound from "./HomeMerryGoRound";
import "./HomeRecommended.scss";
import HomeVideoCard from "./HomeVideoCard";

export default function HomeRecommended() {
  const columns = useFlexibleRange(3, 5);

  const [recommendedCardDataList = [], setRecommendCardDataList] =
    useFetchState(() => getVideoCardDataList());
  return (
    <div
      className="home-recommended"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      <div className="recommended-swipe">
        <HomeMerryGoRound></HomeMerryGoRound>
      </div>

      {recommendedCardDataList.slice(0, columns * 3 - 4).map((data) => (
        <div className="recommended-card" key={data.id}>
          <HomeVideoCard cardData={data}></HomeVideoCard>
        </div>
      ))}
    </div>
  );
}
