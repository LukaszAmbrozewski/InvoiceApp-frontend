import React, { MouseEventHandler } from "react";
import "./ShowPasswordBtn.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface Props {
  onClick: MouseEventHandler;
}

export const ShowPasswordBtn = (props: Props) => {
  return (
    <p className="field-box, visibility-btn-box">
      <button className="visibility-btn" type="button" onClick={props.onClick}>
        <VisibilityIcon />
      </button>
    </p>
  );
};
