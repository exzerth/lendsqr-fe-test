import brandLogo from "../images/lendsqrlogo.svg";
import notifIcon from "../images/notif.svg";
import avatarImg from "../images/avatar.svg";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <div className="left">
              <div className="brand-logo">
                <img src={brandLogo} alt="lendsqr logo" />
              </div>
              <input
                className="search-box"
                type="text"
                placeholder="search for anything"
              />
            </div>
            <div className="right">
              <a className="doc-link" href="#doc">
                Docs
              </a>
              <div className="profile">
                <img
                  className="notif-icon"
                  src={notifIcon}
                  alt="notifications"
                />
                <img className="avatar-img" src={avatarImg} alt="avatar" />
                <div className="profile-name">Adedeji</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
