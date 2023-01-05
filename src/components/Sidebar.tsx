import orgIcon from "../images/orgicon.svg";
import dashboardIcon from "../images/dashicon.svg";
import userIcon from "../images/usericon.svg";
import guarantorIcon from "../images/guaranicon.svg";
import loanIcon from "../images/loanicon.svg";
import savingsIcon from "../images/savingsicon.svg";
import decisionIcon from "../images/decisionicon.svg";
import loanReqIcon from "../images/requesticon.svg";
import whitelistIcon from "../images/wlicon.svg";
import karmaIcon from "../images/karmaicon.svg";
import savingProductIcon from "../images/savproicon.svg";
import feesIcon from "../images/feesicon.svg";
import txnIcon from "../images/txnicon.svg";
import servicesIcon from "../images/servicesicon.svg";
import servicesAcctIcon from "../images/servaccticon.svg";
import settleIcon from "../images/settleicon.svg";
import reportsIcon from "../images/reportsicon.svg";
import prefIcon from "../images/preficon.svg";
import pricingIcon from "../images/pricingicon.svg";
import auditIcon from "../images/auditicon.svg";
import SidebarLinks from "./SidebarLinks";

const Sidebar: React.FC = () => {
  return (
    <>
      <aside>
        <div className="org-box">
          <img src={orgIcon} alt="organization" />
          <div className="text switch-org">Switch Organization</div>
        </div>
        <div className="dash-box">
          <img src={dashboardIcon} alt="dashboard" />
          <div className="text">Dashboard</div>
        </div>
        <div>
          <div className="customers-title">Customers</div>
          <SidebarLinks
            className={"customer-content-active"}
            icon={userIcon}
            name={"Users"}
          />
          <SidebarLinks icon={guarantorIcon} name={"Guarantors"} />
          <SidebarLinks icon={loanIcon} name={"Loans"} />
          <SidebarLinks icon={decisionIcon} name={"Decision Models"} />
          <SidebarLinks icon={savingsIcon} name={"Savings"} />
          <SidebarLinks icon={loanReqIcon} name={"Loan Requests"} />
          <SidebarLinks icon={whitelistIcon} name={"Whitelists"} />
          <SidebarLinks icon={karmaIcon} name={"Karma"} />
        </div>
        <div>
          <div className="customers-title">Businesses</div>
          <SidebarLinks icon={orgIcon} name={"Organizations"} />
          <SidebarLinks icon={loanReqIcon} name={"Loan Products"} />
          <SidebarLinks icon={savingProductIcon} name={"Savings Products"} />
          <SidebarLinks icon={feesIcon} name={"Fees and Charges"} />
          <SidebarLinks icon={txnIcon} name={"Transactions"} />
          <SidebarLinks icon={servicesIcon} name={"Services"} />
          <SidebarLinks icon={servicesAcctIcon} name={"Services Account"} />
          <SidebarLinks icon={settleIcon} name={"Settlements"} />
          <SidebarLinks icon={reportsIcon} name={"Reports"} />
        </div>
        <div>
          <div className="customers-title">Settings</div>
          <SidebarLinks icon={prefIcon} name={"Preferences"} />
          <SidebarLinks icon={pricingIcon} name={"Fees and Pricing"} />
          <SidebarLinks icon={auditIcon} name={"Audit Logs"} />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
