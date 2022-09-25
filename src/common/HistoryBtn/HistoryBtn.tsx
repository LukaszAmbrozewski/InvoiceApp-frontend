import React from 'react';
import {Link} from "react-router-dom";
import HistoryIcon from '@mui/icons-material/History';
import '../CommonStyles.css'

export const HistoryBtn = () => {
    return (
        <Link to='/clients-list' className="menu-btn">
            <div className="icon-background">
                <HistoryIcon className="menu-btn-icon"/>
            </div>
            <div className="menu-btn-text">
                Historia aktywności
            </div>
        </Link>
    )
}