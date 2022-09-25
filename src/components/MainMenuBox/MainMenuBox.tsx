import React from 'react';
import {InvoicesListBtn} from "../InvoicesListBtn/InvoicesListBtn";
import {AddClientBtn} from "../AddClientBtn/AddClientBtn";
import {ClientsListBtn} from "../ClientsListBtn/ClientsListBtn";
import {PatchUserBtn} from "../PatchUserBtn/PatchUserBtn";
import {HistoryBtn} from "../HistoryBtn/HistoryBtn";
import {StatisticsBtn} from "../StatisticsBtn/StatisticsBtn";

import './MainMenuBox.css'

export const MainMenuBox = () => {
    return (
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
    )
}