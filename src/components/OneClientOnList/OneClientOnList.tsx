import React, {useState} from 'react';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {apiUrl} from "../../config/api";
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './OneClientOnList.css'

interface Props{
    id: string;
    companyName: string;
    streetAddress: string;
    cityAndCode: string;
    nip: number;
    regon: number;
    phoneNumber: number;
    email: string,
    onRemoveClient: () => void;
}

export const OneClientOnList = (props: Props) => {
    const [showClientDetails, setShowClientDetails] = useState<boolean>(false)
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const updateClientList = () => {
        props.onRemoveClient();
    }

    const showDetails = () => {
        showClientDetails ? setShowClientDetails(false) : setShowClientDetails(true)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const removeClient = async (clientId: string) => {
        handleClose()
        const res = await fetch(`${apiUrl}/clients/${clientId}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        const response = await res.json();
        response.isSuccess ? updateClientList() : navigate('/error')
    }

    return(
        <>
        <div className='clients-list-box'>
            {showClientDetails ? (
                    <div className='client-info-box'>
                        <div className='client-main-info-box'>
                            <p className='client-main-info-text'>{props.companyName}</p>
                            <div className='client-main-buttons-box'>
                                <button className='modify-client-btn'>
                                    <EditIcon className='modify-client-icon'/>
                                </button>
                                <button className='modify-client-btn, remove-client-btn' onClick={handleClickOpen}>
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
                        <button className='modify-client-btn, remove-client-btn' onClick={handleClickOpen}>
                            <DeleteIcon className='modify-client-icon'/>
                        </button>
                        <button className='modify-client-btn' onClick={showDetails}>
                            <ExpandMoreIcon className='modify-client-icon'/>
                        </button>
                    </div>
                </div>
            )}
        </div>
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Czy na pewno chcesz usunąć tego kontrahenta?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Nazwa firmy: {props.companyName}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Anuluj</Button>
                        <Button onClick={() => removeClient(props.id)} autoFocus>
                            Usuń
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}