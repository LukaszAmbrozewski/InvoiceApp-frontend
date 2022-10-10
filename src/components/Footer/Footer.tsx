import React from 'react';
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import {isMobile} from "react-device-detect";

import './Footer.css'

export const Footer = () => {
    return (
        <> {
            isMobile ? (
            <footer className="footer-mobile">
            <Link to='/main' className="home-btn"><HomeIcon/></Link>
            <Link to='/invoice-add' className="add-invoice-btn"><AddIcon/></Link>
            <Link to='/info' className="info-btn"><InfoIcon/></Link>
            </footer>
            ) : null
        }
        </>
)
}