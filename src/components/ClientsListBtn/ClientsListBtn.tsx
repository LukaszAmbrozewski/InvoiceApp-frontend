import React from 'react';
import {Link} from "react-router-dom";
import GroupIcon from '@mui/icons-material/Group';
import '../ComponentsStyles.css'

export const ClientsListBtn = () => {
    return (
        <Link to='/clients-list' className="menu-btn">
            <div className="icon-background">
                <GroupIcon className="menu-btn-icon"/>
            </div>
            <div className="menu-btn-text">
                Lista kontrahentów
            </div>
        </Link>
    )
}