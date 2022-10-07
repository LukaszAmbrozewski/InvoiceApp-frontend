import React, {useState} from 'react';
import './OneClientOnList.css'
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props{
    id: string;
    companyName: string;
    streetAddress: string;
    cityAndCode: string;
    nip: number;
    regon: number;
    phoneNumber: number;
    email: string,
}

export const OneClientOnList = (props: Props) => {
    const [showClientDetails, setShowClientDetails] = useState<boolean>(false)

    const showDetails = () => {
        showClientDetails ? setShowClientDetails(false) : setShowClientDetails(true)
    }

    return(
        <div className='clients-list-box'>
            {showClientDetails ? (
                    <div className='client-info-box'>
                        <div className='client-main-info-box'>
                            <p className='client-main-info-text'>{props.companyName}</p>
                            <div className='client-main-buttons-box'>
                                <button className='modify-client-btn'>
                                    <EditIcon className='modify-client-icon'/>
                                </button>
                                <button className='modify-client-btn, remove-client-btn'>
                                    <DeleteIcon className='modify-client-icon'/>
                                </button>
                                <button className='modify-client-btn' onClick={showDetails}>
                                    <ExpandMoreIcon className='modify-client-icon'/>
                                </button>
                            </div>
                        </div>
                        <div className='client-details-box'>
                            <p>{props.companyName}</p>
                            <p>{props.streetAddress}</p>
                            <p>{props.cityAndCode}</p>
                            <br/>
                            <p>NIP: {props.nip}</p>
                            <p>REGON: {props.regon}</p>
                            <p>Email: {props.email}</p>
                            <p>Telefon: {props.phoneNumber}</p>
                        </div>
                    </div>
            ) : (
                <div className='client-main-info-box'>
                    <p className='client-main-info-text'>{props.companyName}</p>
                    <div className='client-main-buttons-box'>
                        <button className='modify-client-btn'>
                            <EditIcon className='modify-client-icon'/>
                        </button>
                        <button className='modify-client-btn, remove-client-btn'>
                            <DeleteIcon className='modify-client-icon'/>
                        </button>
                        <button className='modify-client-btn' onClick={showDetails}>
                            <ExpandMoreIcon className='modify-client-icon'/>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}