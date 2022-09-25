import React from 'react';
import {Link} from "react-router-dom";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import '../CommonStyles.css'

export const InvoicesListBtn = () => {
    return (
        <Link to='/invoices-list' className="menu-btn">
            <div className="icon-background">
                <FormatListBulletedIcon className="menu-btn-icon"/>
            </div>
            <div className="menu-btn-text">
                Twoje faktury
            </div>
        </Link>
    )
}