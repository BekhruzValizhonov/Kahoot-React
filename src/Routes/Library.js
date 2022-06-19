import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import { playGame } from "../redux/reducers/kahootReducer";
import NavbarKahoot from "../NavbarAndSideBar/navbar";
import SideBar from "../NavbarAndSideBar/SideBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Library() {
  let kahootReducer = useSelector((state) => state.kahootReducer);
  let dispatch = useDispatch();

  return (
    <div className="library">
      <NavbarKahoot />
      <SideBar />
      {kahootReducer.kahoots.map((kahoot) => {
        return (
          <div className="library_card" key={uniqid()}>
            <input className="checkbox-library" type="checkbox" />
            <img
              src="https://www.frontiercsd.org/cms/lib/NY19000265/Centricity/Domain/429/tumblr_inline_n5z9b2fD7m1rgp1yg.gif"
              alt="404"
              width={176}
              height={120}
            />
            <span className="title">{kahoot.title}</span>

            <div className="text-left">
              <span className="AccountCircleIcon">
                <AccountCircleIcon />
              </span>
              <span>Bekhruz_Valizhonov</span>
              &nbsp;
              <span className="assign">Assign</span>
              &nbsp;
              <span className="start">
                <Link
                  to="/gamePage"
                  onClick={() => dispatch(playGame({ libraryId: kahoot.id }))}
                >
                  Start
                </Link>
              </span>
              <span>
                <EditIcon />
              </span>
              <span>
                <MoreVertIcon />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Library;
