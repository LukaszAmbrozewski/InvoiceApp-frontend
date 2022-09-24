import React from 'react';
import {Link} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

import '../CommonStyles.css'

export const AddClientBtn = () => {
    return (
        <Link to='/client-add' className="menu-btn">
            <div className="icon-background" style={{backgroundColor: '#10a801'}}>
                <AddIcon className="menu-btn-icon"/>
            </div>
            <div>
                Dodaj kontrahenta
            </div>
        </Link>
    )
}