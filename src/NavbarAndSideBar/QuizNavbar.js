import React from "react";
import "./navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import StorefrontIcon from "@mui/icons-material/Storefront";
import StarsIcon from "@mui/icons-material/Stars";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TocIcon from "@mui/icons-material/Toc";
import { Link, useNavigate } from "react-router-dom";

const QuizNavbar = (props) => {
  let navigate = useNavigate();
  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        {/* navbarImg */}
        <div className="logoKahoot">
          <img
            src="https://1000logos.net/wp-content/uploads/2022/02/Kahoot-Logo.png"
            alt="navbarImg"
            width={90}
          />
        </div>
        {/* /navbarImg */}

        {/* navbarMenu */}
        <div className="navbarRight">
          <span>
            <HomeIcon />
            <div>Home</div>
          </span>
          <span>
            <ExploreIcon />
            <div>Discover</div>
          </span>
          <span>
            <TocIcon />
            <div>Library</div>
          </span>
          <span>
            <SignalCellularAltIcon />
            <div>Reports</div>
          </span>
          <span>
            <StorefrontIcon />
            <div>Marketplace</div>
          </span>
          {/* /navbarMenu */}
          <div className="navbarLeft">
            <span>
              <StarsIcon />
              <div className="upgrade-icon">Upgrade</div>
            </span>
            {/* button create */}
            {props.questionsArray.length > 0 ? (
              <Link
                style={{ textDecoration: "none" }}
                className="btnCreate"
                to="/library"
                onClick={props.saveTheLibrary}
              >
                Save
              </Link>
            ) : (
              <span className="quiz_navabr_save_span">Save</span>
            )}
            {/* /button create */}
            <span>
              <AccountCircleIcon />
            </span>
            <span>
              <NotificationsIcon />
            </span>
          </div>
        </div>
      </div>
      {/* /Navbar */}
    </div>
  );
};

export default QuizNavbar;
