import React, {useEffect, useState} from 'react';
import {isMobile} from 'react-device-detect';
import {apiUrl} from "../../config/api";
import {Client} from "types";
import '../ComponentsStyles.css'
import {OneClientOnList} from "../OneClientOnList/OneClientOnList";

export const ClientsListBox = () => {
    const [clientsList, setClientsList] = useState<Client[]>()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${apiUrl}/clients`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            if (data) {
                setClientsList(data)
            }
        }
        fetchData();
    }, [])


    return (
        <div className={isMobile ? 'data-box-mobile' : 'data-box'}>
            {!clientsList ? null : (
                clientsList.map(client => (
                        <OneClientOnList
                            id={client.id}
                            companyName={client.companyName}
                            streetAddress={client.streetAddress}
                            cityAndCode={client.cityAndCode}
                            nip={Number(client.nip)}
                            regon={Number(client.regon)}
                            phoneNumber={Number(client.phoneNumber)}
                            email={client.email}
                        />
                    )
                ))
            }
        </div>

    )
}
