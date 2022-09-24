import React from 'react';
import {InvoicesListBtn} from "../../common/InvoicesListBtn/InvoicesListBtn";

import './Main.css'
import {AddClientBtn} from "../../common/AddClientBtn/AddClientBtn";

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
                    <AddClientBtn/>
                </div>
                <div>
                    <AddClientBtn/>
                </div>
                <div>
                    <AddClientBtn/>
                </div>
                <div>
                    <AddClientBtn/>
                </div>
            </div>
        </div>
    )
}