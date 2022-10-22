import React, {useEffect, useState} from 'react';
import {isMobile} from "react-device-detect";
import {getAllInvoices} from "../../utils/getAllInvoices";
import {Invoice} from "types";
import {Loading} from "../../common/Loading/Loading";
import {OneInvoiceOnList} from "../OneInvoiceOnList/OneInvoiceOnList";

export const InvoicesListBox = () => {
    const [invoicesList, setInvoicesList] = useState<Invoice[]>();

    const getInvoices = async () => {
        const invoices = await getAllInvoices();
        setInvoicesList(invoices);
    }

    useEffect(() => {
        getInvoices()
    }, [])


    return (
        <div className={isMobile ? 'data-box-mobile' : 'data-box'}>
            {invoicesList ? (
                <>
                    {
                        invoicesList
                            .sort((a, b) => a.invoiceNumber.localeCompare(b.invoiceNumber))
                            .map((invoice => (
                                <OneInvoiceOnList invoice={invoice} key={invoice.id} getInvoices={getInvoices}/>
                            )))
                    }
                </>
            ) : <Loading/>}
        </div>
    )
}