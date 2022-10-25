import React from "react";
import HandymanIcon from "@mui/icons-material/Handyman";
import { MainBtn } from "../../common/MainBtn/MainBtn";

export const ErrorBox = () => {
  return (
    <div className="main-info-box">
      <HandymanIcon className="main-info-icon" />
      <p className="main-info-text">
        Przepraszamy. Wystąpił błąd aplikacji nad którym obecnie pracujemy.
        Spróbuj ponownie później.
      </p>
      <MainBtn to="/" text="Przejdź do strony głównej"></MainBtn>
    </div>
  );
};
