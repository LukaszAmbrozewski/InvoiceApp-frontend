import React, {useEffect, useState} from 'react';
import {Client} from "types";
import {isMobile} from "react-device-detect";
import {getClients} from "../../utils/getClients";
import {Loading} from "../../common/Loading/Loading";
import './InvoiceAddBox.css';
import '../ComponentsStyles.css';
import {MainBtn} from "../../common/MainBtn/MainBtn";
import {ClientSelect} from "../ClientSelect/ClientSelect";
import {InvoiceAddFrom} from "../InvoiceAddForm/InvoiceAddForm";

export const InvoiceAddBox = () => {
    const [clientsList, setClientsList] = useState<Client[]>();
    const [clientId, setClientId] = React.useState('');

    const selectClient = (clientId: string) => {
        setClientId(clientId)
    }

    useEffect(() => {
        const fetchClientsData = async () => {
            const data = await getClients()
            if (data) {
                setClientsList(data)
            }
        }
        fetchClientsData();
    }, [])

    return (
        <div className={isMobile ? 'data-box-mobile' : 'data-box'}>
            {!clientsList ? <Loading/> : (
                <div className='form-box'>
                    <p className='field-description-text'>Wybierz kontrahenta</p>
                    <ClientSelect clientsList={clientsList} selectClient={selectClient} clientId={clientId}/>
                    <p className='invoice-add-text'>Nie znalazłeś kontrahenta na liście?</p>
                    <MainBtn text='Dodaj nowego kontrahenta' to='/client-add'/>
                    <InvoiceAddFrom buttonText='Utwórz fakturę' clientId={clientId} ></InvoiceAddFrom>
                </div>
            )}
        </div>
    )
}