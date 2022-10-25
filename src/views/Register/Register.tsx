import React from "react";
import { SecondHeader } from "../../components/SecondHeader/SecondHeader";
import { RegisterBox } from "../../components/RegisterBox/RegisterBox";

export const Register = () => {
  return (
    <nav className="views">
      <SecondHeader secondHeaderText="Zarejestruj się"></SecondHeader>
      <RegisterBox />
    </nav>
  );
};
