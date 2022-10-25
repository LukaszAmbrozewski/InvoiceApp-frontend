import React from "react";
import { SecondHeader } from "../../components/SecondHeader/SecondHeader";
import { UserAddFailedBox } from "../../components/UserAddFailedBox/UserAddFailedBox";

export const UserAddFailed = () => {
  return (
    <nav className="views">
      <SecondHeader secondHeaderText="Problem z rejestracją"></SecondHeader>
      <UserAddFailedBox />
    </nav>
  );
};
