import { useState } from "react";
import BiliHomeGrid from "./BiliHomeGrid";
import "./FeedFloor.scss";
type Props = {

};
export default function (props: Props) {
  const [columns, setColumns] = useState(0);
  return (
    <BiliHomeGrid
      className="feed-floor"
      updateColumns={setColumns}
    ></BiliHomeGrid>
  );
}
