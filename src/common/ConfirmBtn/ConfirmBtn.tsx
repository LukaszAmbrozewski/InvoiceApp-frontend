import React, {MouseEventHandler} from 'react';
import { MainBtn } from '../MainBtn/MainBtn';
import './ConfirmBtn.css'

interface Props {
    text: string;
    to?: string;
    onClick?: MouseEventHandler;
    type?: 'submit' | 'reset' | 'button' | undefined;
}

export const ConfirmBtn = (props: Props) => {
    return(
        <div className='confirm-button'>
            <MainBtn text={props.text} to={props.to} type={props.type} onClick={props.onClick}/>
        </div>
    )
}