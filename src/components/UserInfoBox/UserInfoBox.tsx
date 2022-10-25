import React, { useEffect, useState } from "react";
import { UserData } from "types";
import { DataField } from "../../common/DataField/DataField";
import { isMobile } from "react-device-detect";
import "../ComponentsStyles.css";
import { ConfirmBtn } from "../../common/ConfirmBtn/ConfirmBtn";
import { getUserData } from "../../utils/getUserData";

const initialState = {
  id: "",
  email: "",
  companyName: "",
  streetAddress: "",
  cityAndCode: "",
  nip: undefined,
  regon: undefined,
  phoneNumber: undefined,
};

export const UserInfoBox = () => {
  const [userData, setUserData] = useState<UserData>(initialState);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData();
      data.id ? setUserData(data) : setUserData(initialState);
    };
    fetchData();
  }, []);

  return userData.id === "" ? null : (
    <div className={isMobile ? "data-box-mobile" : "data-box"}>
      <DataField description="Nazwa firmy" text={userData.companyName} />
      <DataField description="Ulica i numer" text={userData.streetAddress} />
      <DataField
        description="Miasto i kod pocztowy"
        text={userData.cityAndCode}
      />
      <DataField description="Numer NIP" text={userData.nip + ""} />
      <DataField description="Numer REGON" text={userData.regon + ""} />
      <DataField
        description="Numer telefonu"
        text={userData.phoneNumber + ""}
      />
      <DataField description="Email" text={userData.email} />
      <ConfirmBtn text="Edytuj dane" to="/user-patch" />
    </div>
  );
};
