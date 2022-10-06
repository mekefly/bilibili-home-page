import "./Nav.scss";
import NavLeftEntry from "./NavLeftEntry";
import NavRightEntry from "./NavRightEntry";
import NavSearchFrom from "./NavSearchFrom";

function Nav() {
  return (
    <div className="nav">
      <NavLeftEntry></NavLeftEntry>
      <div className="center-container">
        <NavSearchFrom />
      </div>
      <NavRightEntry></NavRightEntry>
    </div>
  );
}

export default Nav;
