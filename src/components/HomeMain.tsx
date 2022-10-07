import FeedFloors from "./FeedFloors";
import "./HomeMain.scss";
import HomeRecommended from "./HomeRecommended";

export default function HomeMain() {
  return (
    <main className="home-main">
      <HomeRecommended></HomeRecommended>
      <FeedFloors></FeedFloors>
    </main>
  );
}
