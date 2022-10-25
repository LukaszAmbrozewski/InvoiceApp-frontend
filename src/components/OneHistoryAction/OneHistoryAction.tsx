import React from "react";
import "./OneHistoryAction.css";
import "../ComponentsStyles.css";

interface Props {
  date: string;
  time: string;
  action: string;
}

export const OneHistoryAction = (props: Props) => {
  return (
    <div className="history-box">
      <div className="history-data-box">
        <p>{props.date}</p>
        <p>{props.time}</p>
      </div>
      <div className="history-data-text">{props.action}</div>
    </div>
  );
};
