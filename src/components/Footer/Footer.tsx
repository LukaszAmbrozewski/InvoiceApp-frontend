import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';

import './Footer.css'

export const Footer = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    return (
        <> {
            isMobile ? (
            <footer className="footer-mobile">
            <Link to='/home' className="home-btn"><HomeIcon/></Link>
            <Link to='/invoice-add' className="add-invoice-btn"><AddIcon/></Link>
            <Link to='/info' className="info-btn"><InfoIcon/></Link>
            </footer>
            ) : null
        }
        </>
)
}