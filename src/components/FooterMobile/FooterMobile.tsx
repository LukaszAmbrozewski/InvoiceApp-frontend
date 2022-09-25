import React from 'react';
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';

import './FooterMobile.css'

export const FooterMobile = () => {
    return (
        <footer className="footer-mobile">
            <Link to='/home' className="home-btn"><HomeIcon/></Link>
            <Link to='/invoice-add' className="add-invoice-btn"><AddIcon/></Link>
            <Link to='/info' className="info-btn"><InfoIcon/></Link>
        </footer>
)
}