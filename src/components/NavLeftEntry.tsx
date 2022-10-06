function NavLeftEntry() {
  const leftEntryList = [
    { name: "首页" },
    { name: "番剧" },
    { name: "直播" },
    { name: "游戏中心" },
    { name: "会员购" },
    { name: "漫画" },
    { name: "赛事" },
  ];
  return (
    <ul className="left-entry">
      {leftEntryList.map((v) => (
        <li key={v.name}>
          <a className="default-entry">
            <span>{v.name}</span>
          </a>
        </li>
      ))}
      <li>
        <a>
          <span>下载客户端</span>
        </a>
      </li>
    </ul>
  );
}
export default NavLeftEntry;
