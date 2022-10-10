import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import './ShowPersonMenuBtn.css'
import {apiUrl} from "../../config/api";

export const ShowPersonMenuBtn = () => {
    const [expand, setExpand] = useState(false)
    const navigate = useNavigate();

    const changeVisibility = () => {
        expand ? setExpand(false) : setExpand(true);
    }

    const logout = async () => {
        const res = await fetch(`${apiUrl}/auth/logout`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        const data = await res.json();
        if (data.ok) {
            navigate('/login');
        }
    }

    const showUserDetails = () => {
        navigate('/user-info');
    }

    return (
        <>
            {expand ? (
                <>
                    <div onClick={changeVisibility} className='person-icon-box'>
                        <PersonIcon className="person-icon"/>
                    </div>
                    <div className="person-menu">
                        <div className="person-menu-btn" onClick={logout}>Wyloguj</div>
                        <div className="person-menu-btn" onClick={showUserDetails}>Dane użytkownika</div>
                    </div>
                </>


            ) : (
                <div onClick={changeVisibility} className='person-icon-box'>
                    <PersonIcon className="person-icon"/>
                </div>
            )}
        </>
    )
}