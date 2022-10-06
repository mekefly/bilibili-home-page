import "./App.css";
import BiliHeaderChannel from "./components/BiliHeaderChannel";
import HeaderBanner from "./components/HeaderBanner";
import HomeMain from "./components/HomeMain";
import HomeMerryGoRound from "./components/HomeMerryGoRound";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <HeaderBanner></HeaderBanner>
      <Nav></Nav>
      <BiliHeaderChannel></BiliHeaderChannel>
      <HomeMain></HomeMain>
    </>
  );
}

export default App;
