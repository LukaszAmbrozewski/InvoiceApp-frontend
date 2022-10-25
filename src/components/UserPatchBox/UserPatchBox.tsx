import React, { useEffect, useState } from "react";
import { UserForm } from "../UserForm/UserForm";

import { getUserData } from "../../utils/getUserData";
import { UserData } from "types";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { Loading } from "../../common/Loading/Loading";
import { ConfirmBtn } from "../../common/ConfirmBtn/ConfirmBtn";
import { apiUrl } from "../../config/api";

export const UserPatchBox = () => {
  const [userData, setUserData] = useState<UserData>();
  const navigate = useNavigate();

  const fetchData = async () => {
    const data = await getUserData();
    data.id ? setUserData(data) : navigate("/error");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const patchUserData = async (values: UserData) => {
    const res = await fetch(`${apiUrl}/user`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: values.id,
        companyName: values.companyName,
        streetAddress: values.streetAddress,
        cityAndCode: values.cityAndCode,
        nip: values.nip,
        regon: values.regon,
        phoneNumber: values.phoneNumber,
      }),
    });

    const response = await res.json();
    response.isSuccess ? navigate("/user-info") : navigate("/error");
  };

  return (
    <div className={isMobile ? "data-box-mobile" : "data-box"}>
      {userData ? (
        <div className="form-box">
          <UserForm
            initialValues={userData}
            buttonText="Zatwierdź zmiany"
            sendForm={patchUserData}
          />
          <ConfirmBtn text="Anuluj" to="/user-info" />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
