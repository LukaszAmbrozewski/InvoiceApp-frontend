import React from "react";
import { Link } from "react-router-dom";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import "../ComponentsStyles.css";

export const StatisticsBtn = () => {
  return (
    <Link to="/statistics" className="menu-btn">
      <div className="icon-background">
        <TrendingUpIcon className="menu-btn-icon" />
      </div>
      <div className="menu-btn-text">Statystyki</div>
    </Link>
  );
};
