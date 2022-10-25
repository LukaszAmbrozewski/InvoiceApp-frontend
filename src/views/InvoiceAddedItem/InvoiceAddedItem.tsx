import React from "react";
import { Header } from "../../components/Header/Header";
import { SecondHeader } from "../../components/SecondHeader/SecondHeader";
import { Footer } from "../../components/Footer/Footer";
import { InvoiceAddedItemBox } from "../../components/InvoiceAddedItemBox/InvoiceAddedItemBox";

export const InvoiceAddedItem = () => {
  return (
    <nav className="views">
      <Header mainHeaderText="Dodaj fakturę" />
      <SecondHeader secondHeaderText="Dodawanie pozycji do faktury"></SecondHeader>
      <InvoiceAddedItemBox />
      <Footer />
    </nav>
  );
};
