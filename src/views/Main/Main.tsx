import React from 'react';
import {InvoicesListBtn} from "../../components/InvoicesListBtn/InvoicesListBtn";

import './Main.css'
import {AddClientBtn} from "../../components/AddClientBtn/AddClientBtn";
import {ClientsListBtn} from "../../components/ClientsListBtn/ClientsListBtn";
import {PatchUserBtn} from "../../components/PatchUserBtn/PatchUserBtn";
import {HistoryBtn} from "../../components/HistoryBtn/HistoryBtn";
import {StatisticsBtn} from "../../components/StatisticsBtn/StatisticsBtn";
import {HeaderMobile} from "../../components/HeaderMobile/HeaderMobile";
import {FooterMobile} from "../../components/FooterMobile/FooterMobile";

export const Main = () => {
    return(
        <nav className="main">
            <HeaderMobile mainHeaderText='Strona główna' secondHeaderText='Zarządzaj swoimi fakturami'/>
            <div className="menu-box">
                <div>
                    <InvoicesListBtn/>
                </div>
                <div>
                    <AddClientBtn/>
                </div>
                <div>
                    <ClientsListBtn/>
                </div>
                <div>
                    <PatchUserBtn/>
                </div>
                <div>
                    <HistoryBtn/>
                </div>
                <div>
                    <StatisticsBtn/>
                </div>
            </div>
            <FooterMobile/>
        </nav>
    )
}