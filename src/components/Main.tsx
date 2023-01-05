import Sidebar from "./Sidebar";
import cardUserIcon from "../images/carduser.svg";
import cardActiveUserIcon from "../images/cardactive.svg";
import cardLoansUserIcon from "../images/cardloan.svg";
import cardSavingsUserIcon from "../images/cardsavings.svg";
import UserCards from "./UserCards";
import "../styles/Main.scss";
import Users from "./Users";

const Main: React.FC = () => {
  return (
    <>
      <div className="main-wrapper">
        <Sidebar />
        <section>
          <div className="section-title">Users</div>
          <div className="user-cards">
            <UserCards icon={cardUserIcon} text={"USERS"} number={2453} />
            <UserCards
              icon={cardActiveUserIcon}
              text={"ACTIVE USERS"}
              number={2453}
            />
            <UserCards
              icon={cardLoansUserIcon}
              text={"USERS WITH LOANS"}
              number={12453}
            />
            <UserCards
              icon={cardSavingsUserIcon}
              text={"USERS WITH SAVINGS"}
              number={12453}
            />
          </div>
          <div className="users-table">
            <Users />
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;
