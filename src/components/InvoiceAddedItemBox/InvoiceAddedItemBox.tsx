import React from "react";
import { ConfirmBtn } from "../../common/ConfirmBtn/ConfirmBtn";
import { useParams } from "react-router-dom";
import "../ComponentsStyles.css";
import { isMobile } from "react-device-detect";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const InvoiceAddedItemBox = () => {
  let param = useParams();

  return (
    <div className={isMobile ? "data-box-mobile" : "data-box"}>
      <CheckCircleOutlineIcon className="main-info-icon" />
      <p className="main-info-text">Dodano pozycję do faktury</p>
      <ConfirmBtn
        text="Dodaj kolejną pozycję"
        to={`/invoice-add-item/${param.invoiceId}`}
      />
      <ConfirmBtn
        text="Przejdź do podsumowania"
        to={`/invoice-summary/${param.invoiceId}`}
      />
    </div>
  );
};
