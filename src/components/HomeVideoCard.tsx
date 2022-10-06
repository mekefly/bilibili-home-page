import classNames from "classnames";
import { CardData } from "../api/HomeVideoCardImg";
import { useFlexibleRange } from "../utils/reactUse";
import "./HomeVideoCard.scss";

type Props = {
  cardData?: CardData;
};
export default function HomeVideoCard({ cardData }: Props) {
  const fontSize = `${useFlexibleRange(12, 20)}px`;
  if (!cardData) {
    return (
      <div className="home-video-card" style={{ fontSize }}>
        <div className={classNames("skeleton", { hide: !!cardData })}>
          <div className="skeleton-cover"></div>
          <div className="skeleton-info">
            <p className="skeleton-text"></p>
            <p className="skeleton-text short"></p>
            <p className="skeleton-light"></p>
          </div>
        </div>
      </div>
    );
  }
  function getData() {
    const infoDate = cardData!.infoDate;
    const infoDateTime = infoDate.getTime();
    const nowTime = Date.now();
    if (nowTime - infoDateTime <= 60 * 1000) {
      return "刚刚";
    } else if (nowTime - infoDateTime <= 60 * 1000 * 60) {
      return `${Math.floor((nowTime - infoDateTime) / 1000 / 60)}分钟前`;
    } else if (nowTime - infoDateTime <= 24 * 1000 * 60 * 60) {
      return `${Math.floor((nowTime - infoDateTime) / 1000 / 60 / 60)}小时前`;
    } else {
      return `${infoDate.getMinutes()}-${infoDate.getDate()}`;
    }
  }

  return (
    <div className="home-video-card" style={{ fontSize }}>
      <div className={classNames("skeleton", { hide: !!cardData })}>
        <div className="skeleton-cover"></div>
        <div className="skeleton-info">
          <p className="skeleton-text"></p>
          <p className="skeleton-text short"></p>
          <p className="skeleton-light"></p>
        </div>
      </div>
      <div className="container">
        <a href={cardData.href}>
          <div className="scale-player-wrap">
            <div className="image-wrap">
              <img src={cardData.cardImg} alt="" />
            </div>
            <div className="states-wrap">
              <div className="states">
                <div className="states-left">
                  <span className="number-of-plays item">
                    {widgetVideoPlayCountSVG}
                    {cardData.numberOfPlays / 100000 > 1
                      ? `${cardData.numberOfPlays / 10000}万`
                      : cardData.numberOfPlays}
                  </span>{" "}
                  <span className="number-of-ammunition item">
                    {widgetVideoDanmaku}

                    {cardData.numberOfAmmunition / 100000 > 1
                      ? `${cardData.numberOfAmmunition / 10000}万`
                      : cardData.numberOfAmmunition}
                  </span>
                </div>
                <span className="duration item">
                  {Math.floor(cardData.duration / 3600) <= 0
                    ? ""
                    : `${Math.floor(cardData.duration / 3600)}:`}
                  {Math.floor(cardData.duration / 60)}:{cardData.duration % 60}
                </span>
              </div>
            </div>
          </div>
        </a>
        <div className="info">
          <p className="info-tit">
            <a href={cardData.href}>{cardData.infoTit}</a>
          </p>
          <div className="info-bottom">
            <a href={cardData.href}>
              <UpSvg></UpSvg>
              {cardData.infoAuthor} {getData()}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
function UpSvg() {
  return (
    <svg id="widget-up" viewBox="0 0 14 10.666">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 2.5A2.5 2.5 0 0 1 2.5 0h8.334a2.5 2.5 0 0 1 2.5 2.5v5.666a2.5 2.5 0 0 1-2.5 2.5H2.5a2.5 2.5 0 0 1-2.5-2.5ZM2.5 1A1.5 1.5 0 0 0 1 2.5v5.666a1.5 1.5 0 0 0 1.5 1.5h8.334a1.5 1.5 0 0 0 1.5-1.5V2.5a1.5 1.5 0 0 0-1.5-1.5zM3 2.833a.5.5 0 0 1 .5.5v2.5a1 1 0 1 0 2 0v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-4 0v-2.5a.5.5 0 0 1 .5-.5Zm4.667 0a.5.5 0 0 0-.5.5v4a.5.5 0 1 0 1 0v-.667H9.25a1.917 1.917 0 1 0 0-3.833zM9.25 5.666H8.167V3.833H9.25a.917.917 0 1 1 0 1.833z"
        fill="currentColor"
        id="path48"
      ></path>
    </svg>
  );
}
var widgetVideoPlayCountSVG = (
  <svg id="widget-video-play-count" fill="none" viewBox="0 0 16 16">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.742 3.424A52.952 52.952 0 0 1 8 3.25c1.714 0 3.208.088 4.258.174A1.45 1.45 0 0 1 13.6 4.745c.078.862.151 2.004.151 3.255s-.073 2.393-.15 3.255a1.45 1.45 0 0 1-1.342 1.321c-1.05.086-2.544.174-4.258.174s-3.208-.088-4.258-.174A1.45 1.45 0 0 1 2.4 11.254 36.666 36.666 0 0 1 2.25 8c0-1.25.073-2.393.15-3.254a1.45 1.45 0 0 1 1.342-1.322ZM8 2.25c-1.747 0-3.27.09-4.34.177a2.45 2.45 0 0 0-2.255 2.229C1.325 5.539 1.25 6.712 1.25 8c0 1.288.075 2.461.155 3.344a2.45 2.45 0 0 0 2.255 2.229A53.91 53.91 0 0 0 8 13.75c1.747 0 3.27-.09 4.34-.177a2.45 2.45 0 0 0 2.255-2.229c.08-.882.155-2.056.155-3.344 0-1.288-.075-2.462-.155-3.345a2.45 2.45 0 0 0-2.255-2.228A53.953 53.953 0 0 0 8 2.25Zm1.75 6.328a.667.667 0 0 0 0-1.155l-2.5-1.444a.667.667 0 0 0-1 .577v2.888c0 .513.555.834 1 .578l2.5-1.444Z"
      fill="currentColor"
    ></path>
  </svg>
);
var widgetVideoDanmaku = (
  <svg id="widget-video-danmaku" fill="none" viewBox="0 0 16 16">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 3.25c-1.714 0-3.208.088-4.258.174A1.45 1.45 0 0 0 2.4 4.746C2.323 5.607 2.25 6.75 2.25 8s.073 2.393.15 3.254a1.45 1.45 0 0 0 1.342 1.322c1.05.086 2.544.174 4.258.174s3.208-.088 4.258-.174a1.45 1.45 0 0 0 1.341-1.321c.078-.862.151-2.004.151-3.255s-.073-2.393-.15-3.255a1.45 1.45 0 0 0-1.342-1.321A52.956 52.956 0 0 0 8 3.25Zm-4.34-.823A53.955 53.955 0 0 1 8 2.25c1.747 0 3.27.09 4.34.177a2.45 2.45 0 0 1 2.255 2.228c.08.883.155 2.057.155 3.345 0 1.288-.075 2.462-.155 3.345a2.45 2.45 0 0 1-2.255 2.228c-1.07.087-2.593.177-4.34.177-1.747 0-3.27-.09-4.34-.177a2.45 2.45 0 0 1-2.255-2.229A37.662 37.662 0 0 1 1.25 8c0-1.288.075-2.461.155-3.344A2.45 2.45 0 0 1 3.66 2.427ZM4 6.75a.5.5 0 0 1 .5-.5h.25a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5Zm2 0a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm-.5 2a.5.5 0 0 0 0 1h.25a.5.5 0 0 0 0-1H5.5Zm2 0a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z"
      fill="currentColor"
    ></path>
  </svg>
);
