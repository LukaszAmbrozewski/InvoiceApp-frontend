import React, {useEffect, useState} from 'react';
import {UserData} from "types";
import {DataField} from "../../common/DataField/DataField";
import {isMobile} from "react-device-detect";
import '../ComponentsStyles.css'
import {ConfirmBtn} from "../../common/ConfirmBtn/ConfirmBtn";
import {getUserData} from "../../utils/getUserData";

const initialState = {
    id: '',
    email: '',
    companyName: '',
    streetAddress: '',
    cityAndCode: '',
    nip: null,
    regon: null,
    phoneNumber: null,
};

export const UserInfoBox = () => {
    const [userData, setUserData] = useState<UserData>(initialState)
    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserData()
            data.id ? setUserData(data) : setUserData(initialState);
        }
        fetchData();
    }, [])

    return (
        (userData.id === '')
            ? null
            : <div className={isMobile ? 'data-box-mobile' : 'data-box'}>
                <DataField description='Nazwa firmy' text={userData.companyName}></DataField>
                <DataField description='Ulica i numer' text={userData.streetAddress}></DataField>
                <DataField description='Miasto i kod pocztowy' text={userData.cityAndCode}></DataField>
                <DataField description='Numer NIP' text={userData.nip+''}></DataField>
                <DataField description='Numer REGON' text={userData.regon+''}></DataField>
                <DataField description='Numer telefonu' text={userData.phoneNumber+''}></DataField>
                <DataField description='Email' text={userData.email}></DataField>
                <ConfirmBtn text='Edytuj dane' to='/user-patch'/>
            </div>
    )
}