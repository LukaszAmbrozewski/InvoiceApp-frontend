import React from "react";
import { Header } from "../../components/Header/Header";
import { SecondHeader } from "../../components/SecondHeader/SecondHeader";
import { Footer } from "../../components/Footer/Footer";
import { UserPatchBox } from "../../components/UserPatchBox/UserPatchBox";

export const UserPatch = () => {
  return (
    <nav className="views">
      <Header mainHeaderText="Edytuj dane" />
      <SecondHeader secondHeaderText="Edytuj dane swojej firmy"></SecondHeader>
      <UserPatchBox />
      <Footer />
    </nav>
  );
};
