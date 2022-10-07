import { ChannelType } from "../api/HomeVideoCardImg";
import "./FeedFloors.scss";
import FeedFloor__channel from "./FeedFloor__channel";
import FeedFloor__Recommend from "./FeedFloor__Recommend";
export default function () {
  return (
    <div className="feed-floors">
      <FeedFloor__channel></FeedFloor__channel>
      <FeedFloor__channel type={ChannelType.番剧}></FeedFloor__channel>
      <FeedFloor__channel type={ChannelType.漫画}></FeedFloor__channel>
      <FeedFloor__Recommend></FeedFloor__Recommend>
    </div>
  );
}
