import img from "../assets/banner-img.avif";
import bilibiliLogo from "../assets/bilibiliLogo.png";
import "./HeaderBanner.scss";
function HeaderBanner() {
  return (
    <div className="header-banner">
      <picture>
        <img src={img} alt="" />
      </picture>
      <HeaderBannerInner />
    </div>
  );
}
function HeaderBannerInner() {
  return (
    <div className="header-banner-inner">
      <a>
        <img src={bilibiliLogo} alt="logo" />
      </a>
    </div>
  );
}
export default HeaderBanner;
