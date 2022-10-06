import { useState } from "react";
import { useFlexibleRange } from "../utils/reactUse";
import "./BiliHeaderChannel.scss";
import { ChannelButton } from "./ChannelButton";
import { ChannelIcons } from "./ChannelIcons";
function BiliHeaderChannel() {
  return (
    <div
      className="bili-header-channel"
      style={{ fontSize: `${useFlexibleRange(8, 10) / 10}em` }}
    >
      <ChannelIcons></ChannelIcons>
      <RightChannelContainer />
    </div>
  );
}
export default BiliHeaderChannel;

function RightChannelContainer() {
  return (
    <div className="right-channel-container">
      <ChannelItemsLeft />
      <ChannelItemsRight />
    </div>
  );
}
function ChannelItemsLeft() {
  const [channelItems, setChannelItems] = useState([
    { name: "番剧", children: [] },
    { name: "电影", children: [] },
    { name: "国创", children: [] },
    { name: "电视剧", children: [] },
    { name: "综艺", children: [] },
    { name: "纪录片", children: [] },
    { name: "动画", children: [] },
    { name: "游戏", children: [] },
    { name: "鬼畜", children: [] },
    { name: "音乐", children: [] },
    { name: "舞蹈", children: [] },
    { name: "影视", children: [] },
    { name: "娱乐", children: [] },
    { name: "知识", children: [] },
    { name: "科技", children: [] },
    { name: "资讯", children: [] },
    { name: "美食", children: [] },
    { name: "生活", children: [] },
    { name: "汽车", children: [] },
    { name: "时尚", children: [] },
    { name: "运动", children: [] },
    { name: "动物圈", children: [] },
    { name: "VLOG", children: [] },
    { name: "搞笑", children: [] },
    { name: "单机游戏", children: [] },
    { name: "虚拟up主", children: [] },
    { name: "公益", children: [] },
    { name: "公开课", children: [] },
  ] as { name: string; href?: string; children: { name: string }[] }[]);

  const maxColumnNumber = 14;
  const minColumnNumber = 7;

  const columnNumber = useFlexibleRange(minColumnNumber, maxColumnNumber);

  const itemHeight = useFlexibleRange(20, 30);
  const dataList = channelItems.slice(
    0,
    columnNumber === maxColumnNumber ? columnNumber * 2 : columnNumber * 2 - 1
  );
  return (
    <div
      className="channel-items-left"
      style={{
        gridTemplateColumns: `repeat(${useFlexibleRange(
          minColumnNumber,
          maxColumnNumber
        )}, 1fr)`,
      }}
    >
      {dataList.map((item) => (
        <ChannelButton
          key={item.name}
          style={{ height: `${itemHeight}px` }}
          value={item.name}
        ></ChannelButton>
      ))}
      {columnNumber < maxColumnNumber ? (
        <ChannelButton
          style={{ height: `${itemHeight}px` }}
          key={"更多"}
          value={"更多"}
          useArrow
          popover={channelItems.slice(columnNumber * 2).map((item) => ({
            value: item.name,
            href: "",
          }))}
        />
      ) : undefined}
    </div>
  );
}

function ChannelItemsRight() {
  const [dataList] = useState(() => [
    {
      value: "专栏",
      icon: ChannelItemsRightIcon1,
    },
    {
      value: "直播",
      icon: ChannelItemsRightIcon2,
      children: [
        { value: "全部", href: "#" },
        { value: "网游", href: "#" },
        { value: "手游", href: "#" },
        { value: "单机", href: "#" },
        { value: "娱乐", href: "#" },
        { value: "电台", href: "#" },
        { value: "虚拟", href: "#" },
        { value: "生活", href: "#" },
        { value: "学习", href: "#" },
      ],
    },
    {
      value: "活动",
      icon: ChannelItemsRightIcon2,
    },
    {
      value: "课堂",
      icon: ChannelItemsRightIcon3,
      children: [
        { value: "通用科普", href: "#" },
        { value: "语言学习", href: "#" },
        { value: "考研", href: "#" },
        { value: "视频制作", href: "#" },
        { value: "考试考证", href: "#" },
        { value: "设计创作", href: "#" },
        { value: "IT培训", href: "#" },
        { value: "兴趣生活", href: "#" },
        { value: "职场提升", href: "#" },
        { value: "我的课堂", href: "#" },
      ],
    },
    {
      value: "社区中心",
      icon: ChannelItemsRightIcon5,
    },
    {
      value: "新歌热榜",
      icon: ChannelItemsRightIcon6,
    },
  ]);

  const itemHeight = useFlexibleRange(20, 30);

  const showedIcon = useFlexibleRange(1, 3) !== 1;

  return (
    <div className="channel-items-right">
      {dataList.map((item) => (
        <ChannelButton
          key={item.value}
          style={{ height: `${itemHeight}px` }}
          value={item.value}
          leftIcon={showedIcon ? item.icon : undefined}
          noEdge
          popover={item.children}
        ></ChannelButton>
      ))}
    </div>
  );
}
const ChannelItemsRightIcon1 = (
  <svg
    t="1642646834655"
    class="icon side-icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="4061"
    width="200"
    height="200"
  >
    <path
      d="M810.6496 153.6C843.6736 153.6 870.4 180.3264 870.4 213.3504v597.2992c0 33.024-26.7264 59.7504-59.7504 59.7504H213.3504A59.7504 59.7504 0 0 1 153.6 810.6496V213.3504C153.6 180.3264 180.3264 153.6 213.3504 153.6z m-332.8 460.8H341.3504a34.1504 34.1504 0 0 0 0 68.2496h136.4992a34.1504 34.1504 0 1 0 0-68.2496z m204.8-136.6016H341.3504a34.1504 34.1504 0 0 0 0 68.2496h341.2992a34.1504 34.1504 0 0 0 0-68.2496z m0-136.3968H341.3504a34.1504 34.1504 0 0 0 0 68.2496h341.2992a34.1504 34.1504 0 1 0 0-68.2496z"
      p-id="4062"
    ></path>
  </svg>
);
const ChannelItemsRightIcon2 = (
  <svg
    t="1642646710703"
    class="icon side-icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3158"
    width="200"
    height="200"
  >
    <path
      d="M682.6496 204.8512c35.4816 0 64.6656 27.136 67.9424 61.696l0.3072 6.6048V358.4l81.92-61.44a34.2016 34.2016 0 0 1 53.248 17.408l1.024 4.7616 0.3584 5.12v392.5504a34.1504 34.1504 0 0 1-50.2784 30.1056l-4.352-2.7648-81.92-61.4912v68.3008c0 33.1264-23.552 60.7232-54.8352 66.9696l-6.8608 1.024-6.5536 0.256H204.8a68.2496 68.2496 0 0 1-67.9936-61.696l-0.3072-6.5536V273.152c0-35.4816 27.136-64.6656 61.696-67.9936L204.8 204.8512h477.8496zM385.3824 389.12a34.1504 34.1504 0 0 0-34.0992 34.1504v179.6096a34.1504 34.1504 0 0 0 53.0432 28.416l134.7584-89.8048a34.1504 34.1504 0 0 0 0-56.832L404.3264 394.8544a34.1504 34.1504 0 0 0-18.944-5.7344z"
      p-id="3159"
    ></path>
  </svg>
);
const ChannelItemsRightIcon3 = (
  <svg
    t="1642646844599"
    class="icon side-icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="4188"
    width="200"
    height="200"
  >
    <path
      d="M772.4544 229.2736l2.048 6.4512 87.2448 283.136c8.8576 33.1264-10.24 66.56-41.984 78.4384l-6.5536 2.048-118.1696 31.744a32.768 32.768 0 0 1-8.192 1.0752l-4.096-0.2048-124.672-14.6432-193.3824 51.8144 36.6592 136.704a49.152 49.152 0 0 1-93.184 30.8736l-1.792-5.4272L155.2896 267.264a49.152 49.152 0 0 1 93.184-30.8736l1.792 5.4272 4.096 15.36 188.928-50.6368a32.768 32.768 0 0 1 8.1408-1.0752l4.096 0.2048 124.5184 14.592 112.1792-30.0544c33.4336-8.96 68.1984 7.7824 80.2304 39.0144z"
      p-id="4189"
    ></path>
  </svg>
);

const ChannelItemsRightIcon4 = (
  <svg
    t="1642669966795"
    class="icon side-icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2862"
    width="200"
    height="200"
  >
    <path
      d="M749.2096 168.96a102.4 102.4 0 0 1 102.2464 96.3584l0.1536 6.0416v477.8496a102.4 102.4 0 0 1-96.3584 102.2464l-6.0416 0.1536H271.36a102.4 102.4 0 0 1-102.2464-96.3584l-0.1536-6.0416V271.36a102.4 102.4 0 0 1 96.3584-102.2464L271.36 168.96h477.8496z m-69.9392 385.4848a34.1504 34.1504 0 0 0-48.2816 0 170.6496 170.6496 0 0 1-241.3568 0 34.1504 34.1504 0 1 0-48.2816 48.2304 238.9504 238.9504 0 0 0 337.92 0 34.1504 34.1504 0 0 0 0-48.2304zM322.56 339.6608a51.2 51.2 0 0 0-51.2 51.2v34.1504a51.2 51.2 0 1 0 102.4 0v-34.1504a51.2 51.2 0 0 0-51.2-51.2z m375.4496 0a51.2 51.2 0 0 0-51.2 51.2v34.1504a51.2 51.2 0 1 0 102.4 0v-34.1504a51.2 51.2 0 0 0-51.2-51.2z"
      p-id="2863"
    ></path>
  </svg>
);
const ChannelItemsRightIcon5 = (
  <svg
    t="1642670011510"
    class="icon side-icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3116"
    width="200"
    height="200"
  >
    <path
      color="currentColor"
      d="M836.3008 170.6496c17.1008 0 31.2832 12.6464 33.7408 29.0816L870.4 204.8v316.16a34.1504 34.1504 0 0 1-29.0816 33.792l-5.0176 0.3584h-102.4v195.7888a34.1504 34.1504 0 0 1-29.1328 33.792l-5.0176 0.3584H386.7648l-127.3344 95.5392a34.2016 34.2016 0 0 1-53.248-17.3568l-1.024-4.8128-0.3584-5.12-0.0512-68.3008H153.6a34.1504 34.1504 0 0 1-32.6656-24.2176l-1.0752-4.8128-0.4096-5.0688v-409.6c0-17.152 12.6464-31.3344 29.0816-33.792L153.6 307.2h174.2336V204.8c0-17.152 12.6464-31.3344 29.1328-33.792l5.0176-0.3584h474.3168z m-477.9008 409.6H256l-5.0688 0.4096a34.1504 34.1504 0 0 0 0 67.4816l5.0688 0.4096h102.4l5.0688-0.4096A34.1504 34.1504 0 0 0 358.4 580.2496z m102.4-136.4992H256l-5.0688 0.4096a34.1504 34.1504 0 0 0 0 67.4816l5.0688 0.4096h204.8l5.0688-0.4096A34.1504 34.1504 0 0 0 460.8 443.7504z m341.2992-204.8512h-406.016v68.2496h303.616c17.152 0 31.3856 12.6464 33.792 29.1328l0.3584 5.0176v145.4592l68.2496 0.0512V238.8992z"
      p-id="3117"
    ></path>
  </svg>
);
const ChannelItemsRightIcon6 = (
  <svg
    t="1642669999866"
    class="icon side-icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2989"
    width="200"
    height="200"
  >
    <path
      d="M783.36 221.8496a102.4 102.4 0 0 1 102.0928 94.7712l0.3072 7.68v409.6a102.4 102.4 0 0 1-94.72 102.0928l-7.68 0.256H237.2096a102.4 102.4 0 0 1-102.0928-94.72l-0.3072-7.68v-409.6A102.4 102.4 0 0 1 229.5808 222.208l7.68-0.3072H783.36z m-155.5968 81.408a34.1504 34.1504 0 0 0-50.7904 23.6032l-54.1696 203.3152a128 128 0 1 0-108.288 220.8256l6.7584 1.024a128 128 0 0 0 141.5168-104.8576l71.7824-253.7984 47.4624 35.4816 3.2768 2.2016a34.1504 34.1504 0 0 0 37.5808-56.832l-91.8528-68.7616z"
      p-id="2990"
    ></path>
  </svg>
);