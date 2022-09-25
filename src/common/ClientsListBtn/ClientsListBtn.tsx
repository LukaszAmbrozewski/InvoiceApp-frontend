import React from 'react';
import {Link} from "react-router-dom";
import GroupIcon from '@mui/icons-material/Group';
import '../CommonStyles.css'

export const ClientsListBtn = () => {
    return (
        <Link to='/invoices-list' className="menu-btn">
            <div className="icon-background">
                <GroupIcon className="menu-btn-icon"/>
            </div>
            <div>
                Lista kontrahentów
            </div>
        </Link>
    )
}