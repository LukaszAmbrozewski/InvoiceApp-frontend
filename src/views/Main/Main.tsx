import React from 'react';
import {InvoicesListBtn} from "../../common/InvoicesListBtn/InvoicesListBtn";

import './Main.css'
import {AddClientBtn} from "../../common/AddClientBtn/AddClientBtn";
import {ClientsListBtn} from "../../common/ClientsListBtn/ClientsListBtn";
import {PatchUserBtn} from "../../common/PatchUserBtn/PatchUserBtn";
import {HistoryBtn} from "../../common/HistoryBtn/HistoryBtn";
import {StatisticsBtn} from "../../common/StatisticsBtn/StatisticsBtn";

export const Main = () => {
    return(
        <div className="main">
            Strona główna
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
        </div>
    )
}