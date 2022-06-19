import React from "react";
import "./sidebar.css";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function SideBar() {
  return (
    <div>
      <div className="menu__content">
        <ul>
          <li>
            <img
              src="https://apksshare.com/wp-content/uploads/2021/06/Drops-by-Kahoot-Language-Learning-Vocabulary-APK-MOD-Download-35.73.png"
              width={30}
              alt="404"
            />
          </li>

          <li>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQFTcKHomITaqQ/company-logo_200_200/0/1601981720834?e=2147483647&v=beta&t=YvTIi43eR-6_5j5CrWokza7-z9LXFrhlAkEmRGU-P9Y"
              width={30}
              alt="404"
            />
          </li>

          <li>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQH7I-WwCbWxkA/company-logo_200_200/0/1629100185944?e=2147483647&v=beta&t=aj1fIcebyoi47uhCN6JCWWlb4KTqYbBwMFnuJgGutac"
              width={30}
              alt="404"
            />
          </li>

          <li>
            <img
              src="http://1.bp.blogspot.com/-MgDd1k8T97Y/VqqWUbWvJDI/AAAAAAAABeM/N-BogkYsfpw/s200/Captura%2Bde%2Bpantalla%2B2016-01-28%2Ba%2Bla%2528s%2529%2B16.28.54.png"
              width={30}
              alt="404"
            />
          </li>
        </ul>
      </div>
      <div className="kahoots_courses_folders">
        <span className="kahoots_icon">
          <MenuIcon />
          &nbsp;
          <span>Kahoots</span>
        </span>

        <span>
          <FolderSpecialIcon />
          &nbsp;
          <span>Courses</span>
        </span>

        <span>
          <AccountCircleIcon />
          &nbsp;
          <span>My Folders</span>
        </span>

        <p className="p_AccessPass">Kahoot!+ AccessPass</p>
      </div>
    </div>
  );
}

export default SideBar;
