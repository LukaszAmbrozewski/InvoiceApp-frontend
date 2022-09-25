import React from 'react';
import {Link} from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';

import '../CommonStyles.css'

export const PatchUserBtn = () => {
    return (
        <Link to='/user-patch' className="menu-btn">
            <div className="icon-background" style={{backgroundColor: '#dd8b05'}}>
                <EditIcon className="menu-btn-icon"/>
            </div>
            <div className="menu-btn-text">
                Edytuj dane swojej firmy
            </div>
        </Link>
    )
}