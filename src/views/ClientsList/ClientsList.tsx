import React from "react";
import { Header } from "../../components/Header/Header";
import { SecondHeader } from "../../components/SecondHeader/SecondHeader";
import { Footer } from "../../components/Footer/Footer";
import { ClientsListBox } from "../../components/ClientsListBox/ClientsListBox";

export const ClientsList = () => {
  return (
    <nav className="views">
      <Header mainHeaderText="Lista kontrahentów" />
      <SecondHeader secondHeaderText="Lista twoich kontrahentów"></SecondHeader>
      <ClientsListBox />
      <Footer />
    </nav>
  );
};
