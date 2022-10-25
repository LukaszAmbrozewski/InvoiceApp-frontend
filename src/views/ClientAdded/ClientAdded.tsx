import React from "react";
import { Header } from "../../components/Header/Header";
import { SecondHeader } from "../../components/SecondHeader/SecondHeader";
import { Footer } from "../../components/Footer/Footer";
import { ClientAddedBox } from "../../components/ClientAddedBox/ClientAddedBox";

export const ClientAdded = () => {
  return (
    <nav className="views">
      <Header mainHeaderText="Dodaj kontrahenta" />
      <SecondHeader secondHeaderText="Dodano nowego kontrahenta"></SecondHeader>
      <ClientAddedBox />
      <Footer />
    </nav>
  );
};
