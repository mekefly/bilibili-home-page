import { useState } from "react";
import avatar from "../assets/avatar.avif";
import 创作中心 from "../assets/创作中心.svg?raw";
import 动态 from "../assets/动态.svg?raw";
import 历史 from "../assets/历史.svg?raw";
import 大会员 from "../assets/大会员.svg?raw";
import 收藏 from "../assets/收藏.svg?raw";
import 消息 from "../assets/消息.svg?raw";
import "./NavRightEntry.scss";

function NavLeftEntry() {
  const [leftEntryList, setLeftEntryList] = useState([
    { name: "大会员", src: 大会员 },
    { name: "消息", src: 消息 },
    { name: "动态", src: 动态 },
    { name: "收藏", src: 收藏 },
    { name: "历史", src: 历史 },
    { name: "创作中心", src: 创作中心 },
  ] as { name: string; src: string }[]);

  return (
    <ul className="right-entry">
      <li>
        <div className="nav-avatar-wrap-container mini-avatar">
          <a className="default-entry">
            <picture>
              <img src={avatar} alt="" />
            </picture>
          </a>
        </div>
      </li>
      {leftEntryList.map((v) => (
        <li key={v.name}>
          <a className="default-entry entry">
            <span
              className="icon"
              dangerouslySetInnerHTML={{ __html: v.src }}
            ></span>
            <span className="entry-name">{v.name}</span>
          </a>
        </li>
      ))}
      <li>
        <div className="nav-avatar-wrap-container mini-avatar">
          <a className="default-entry">
            <UploadEntryButton></UploadEntryButton>
          </a>
        </div>
      </li>
    </ul>
  );
}
function UploadEntryButton() {
  return (
    <button className="upload-entry-button">
      <div className="icon">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="header-upload-entry__icon"
        >
          <path
            d="M12.0824 10H14.1412C15.0508 10 15.7882 10.7374 15.7882 11.6471V12.8824C15.7882 13.792 15.0508 14.5294 14.1412 14.5294H3.84707C2.93743 14.5294 2.20001 13.792 2.20001 12.8824V11.6471C2.20001 10.7374 2.93743 10 3.84707 10H5.90589"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M8.99413 11.2353L8.99413 3.82353"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12.0823 6.29413L8.9941 3.20589L5.90587 6.29413"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
      <span>投稿</span>
    </button>
  );
}
export default NavLeftEntry;
