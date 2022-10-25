import React from "react";
import { Header } from "../../components/Header/Header";
import { SecondHeader } from "../../components/SecondHeader/SecondHeader";
import { Footer } from "../../components/Footer/Footer";
import "../../components/ComponentsStyles.css";
import { InfoBox } from "../../components/InfoBox/InfoBox";

export const Info = () => {
  return (
    <nav className="views">
      <Header mainHeaderText="Informacje" />
      <SecondHeader secondHeaderText="Informacje o aplikacji"></SecondHeader>
      <InfoBox />
      <Footer />
    </nav>
  );
};
