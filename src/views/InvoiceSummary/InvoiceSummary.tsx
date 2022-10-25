import React from "react";
import { Header } from "../../components/Header/Header";
import { SecondHeader } from "../../components/SecondHeader/SecondHeader";
import { Footer } from "../../components/Footer/Footer";
import { InvoiceSummaryBox } from "../../components/InvoiceSummaryBox/InvoiceSummaryBox";

export const InvoiceSummary = () => {
  return (
    <nav className="views">
      <Header mainHeaderText="Podsumowanie" />
      <SecondHeader secondHeaderText="Podsumowanie faktury"></SecondHeader>
      <InvoiceSummaryBox />
      <Footer />
    </nav>
  );
};
