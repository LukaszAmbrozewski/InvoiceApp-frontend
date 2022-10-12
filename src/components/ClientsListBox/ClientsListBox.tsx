import React, {useEffect, useState} from 'react';
import {isMobile} from 'react-device-detect';
import {Client} from "types";
import {OneClientOnList} from "../OneClientOnList/OneClientOnList";
import '../ComponentsStyles.css'
import {Loading} from "../../common/Loading/Loading";
import {getClients} from "../../utils/getClients";

export const ClientsListBox = () => {
    const [clientsList, setClientsList] = useState<Client[]>()

    const fetchClientsData = async () => {
        const data = await getClients()
        if (data) {
            setClientsList(data)
        }
    }

    useEffect(() => {
        fetchClientsData();
    }, [])


    return (
        <div className={isMobile ? 'data-box-mobile' : 'data-box'}>
            {!clientsList ? <Loading/> : (
                clientsList
                    .sort((a, b) => a.companyName.localeCompare(b.companyName))
                    .map(client => (
                        <OneClientOnList
                            id={client.id}
                            key={client.id}
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