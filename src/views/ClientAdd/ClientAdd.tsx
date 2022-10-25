import React from "react";
import { Header } from "../../components/Header/Header";
import { SecondHeader } from "../../components/SecondHeader/SecondHeader";
import { Footer } from "../../components/Footer/Footer";
import { ClientAddBox } from "../../components/ClientAddBox/ClientAddBox";

export const ClientAdd = () => {
  return (
    <nav className="views">
      <Header mainHeaderText="Dodaj kontrahenta" />
      <SecondHeader secondHeaderText="Dane nowego kontrahenta"></SecondHeader>
      <ClientAddBox />
      <Footer />
    </nav>
  );
};
