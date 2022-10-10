import React from 'react';
import {Link} from "react-router-dom";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

import '../ComponentsStyles.css'

export const AddClientBtn = () => {
    return (
        <Link to='/client-add' className="menu-btn">
            <div className="icon-background" style={{backgroundColor: '#10a801'}}>
                <PersonAddAlt1Icon className="menu-btn-icon"/>
            </div>
            <div className="menu-btn-text">
                Dodaj kontrahenta
            </div>
        </Link>
    )
}