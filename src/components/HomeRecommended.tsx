import { useState } from "react";
import { getRecommendedVideoCardDataList } from "../api/HomeVideoCardImg";
import { useFetchState } from "../utils/reactUse";
import BiliHomeGrid from "./BiliHomeGrid";
import HomeMerryGoRound from "./HomeMerryGoRound";
import "./HomeRecommended.scss";
import HomeVideoCard from "./HomeVideoCard";

export default function HomeRecommended() {
  const [columns, setColumns] = useState(0);

  const [recommendedCardDataList = [], setRecommendCardDataList] =
    useFetchState(() => getRecommendedVideoCardDataList());
  return (
    <BiliHomeGrid className="home-recommended" updateColumns={setColumns}>
      <div className="recommended-swipe">
        <HomeMerryGoRound></HomeMerryGoRound>
      </div>

      {recommendedCardDataList.slice(0, columns * 3 - 4).map((data) => (
        <div className="recommended-card" key={data.id}>
          <HomeVideoCard cardData={data}></HomeVideoCard>
        </div>
      ))}
    </BiliHomeGrid>
  );
}
