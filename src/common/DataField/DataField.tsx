import React from "react";
import "./DataField.css";
import { isMobile } from "react-device-detect";

interface Props {
  description: string;
  text: string | number;
}

export const DataField = (props: Props) => {
  return (
    <>
      <p
        className={
          isMobile ? "data-field-description-mobile" : "data-field-description"
        }
      >
        {props.description}
      </p>
      <div className="data-field">
        <p className="data-field-text">{props.text}</p>
      </div>
    </>
  );
};
