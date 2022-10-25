import React from "react";
import { ShowPersonMenuBtn } from "../ShowPersonMenuBtn/ShowPersonMenuBtn";
import { isMobile } from "react-device-detect";
import "./Header.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";

interface Props {
  mainHeaderText: string;
}

export const Header = (props: Props) => {
  return (
    <>
      {isMobile ? (
        <div className="header-box">
          <h1 className="main-header, main-header-mobile">
            <div>{props.mainHeaderText}</div>
            <ShowPersonMenuBtn />
          </h1>
        </div>
      ) : (
        <div className="header-box">
          <h1 className="main-header">
            <div className="header-icon-box">
              <Link to="/main" className="header-btn">
                <HomeIcon className="header-icon" />
              </Link>
              <Link to="/info" className="header-btn">
                <InfoIcon className="header-icon" />
              </Link>
              <Link to="/invoice-add" className="header-btn">
                <AddIcon className="header-add-icon" />
              </Link>
            </div>
            <div className="header-element">{props.mainHeaderText}</div>
            <div className="header-element, header-profile-icon">
              <ShowPersonMenuBtn />
            </div>
          </h1>
        </div>
      )}
    </>
  );
};
