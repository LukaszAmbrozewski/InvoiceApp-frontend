import React, {useEffect, useState} from 'react';
import {isMobile} from 'react-device-detect';
import {apiUrl} from "../../config/api";
import {Client} from "types";
import {OneClientOnList} from "../OneClientOnList/OneClientOnList";
import '../ComponentsStyles.css'

export const ClientsListBox = () => {
    const [clientsList, setClientsList] = useState<Client[]>()

    const fetchClientsData = async () => {
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

    useEffect(() => {
        fetchClientsData();
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
                            onRemoveClient={fetchClientsData}
                        />
                    )
                ))
            }
        </div>
    )
}