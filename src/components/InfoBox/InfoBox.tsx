import React from "react";
import "../../components/ComponentsStyles.css";
import { isMobile } from "react-device-detect";
import "../ComponentsStyles.css";
import "./InfoBox.css";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const InfoBox = () => {
  return (
    <div className={isMobile ? "data-box-mobile" : "data-box"}>
      <div className="main-info-text">
        <p>
          <BusinessCenterIcon className="info-icon" />
        </p>
        <h1 className="main-info-header">InvoiceApp</h1>
        <br />
        <p className="info-text">
          Celem aplikacji jest ułatwienie procesu tworzenia faktur oraz
          zarządzania nimi. Aplikacja została zaprojektowana z wykorzystaniem
          podejścia mobile first. Aplikacja jest w pełni dostosowana zarówno do
          urządzeń mobilnych jak i laptopów czy komputerów stacjonarnych.
          Aplikacja jest w fazie rozwojowej. Wszelkie uwagi związane z
          działaniem aplikacji oraz propozycję zmian proszę zgłaszać na adres
          mailowy.
        </p>
        <br />
        <h2 className="info-header">Aplikacja umożliwia:</h2>
        <p className="info-text">💡 Tworzenie własnej bazy klientów,</p>
        <p className="info-text">💡 Tworzenie nowych faktur,</p>
        <p className="info-text">💡 Proste zarządzanie fakturami,</p>
        <p className="info-text">
          💡 Śledzenie historii aktywności użytkownika,
        </p>
        <p className="info-text">💡 Analizę statystyk,</p>
      </div>
      <h2 className="info-header">Kontakt</h2>
      <GitHubIcon className="info-icon contact-icon" />
      <a className="info-text" href="https://github.com/LukaszAmbrozewski">
        https://github.com/LukaszAmbrozewski
      </a>
      <LinkedInIcon className="info-icon contact-icon" />
      <a
        className="info-text"
        href="https://www.linkedin.com/in/%C5%82ukasz-ambro%C5%BCewski-943a01222/"
      >
        https://www.linkedin.com
      </a>
      <MailOutlineIcon className="info-icon contact-icon" />
      <a className="info-text" href="mailto:lukaszambrozewski@gmail.com">
        lukaszambrozewski@gmail.com
      </a>
    </div>
  );
};
