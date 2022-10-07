import React, {useEffect, useState} from 'react';
import {apiUrl} from "../../config/api";
import {UserData} from "types";
import {DataField} from "../../common/DataField/DataField";
import {MainBtn} from "../../common/MainBtn/MainBtn";
import {isMobile} from "react-device-detect";
import '../ComponentsStyles.css'

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
            const res = await fetch(`${apiUrl}/user`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
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
            <div className='form-confirm-button'>
                <MainBtn text='Edytuj dane' to='/user-patch'/>
            </div>
            </div>
    )
}