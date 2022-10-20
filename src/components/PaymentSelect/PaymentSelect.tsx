import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
// import './ClientSelect.css'
import '../ComponentsStyles.css';

interface Props {
    selectPayment: (clientId: string) => void;
    paymentMethod: string;
}

export const PaymentSelect = (props: Props) => {

    const handleChange = (event: SelectChangeEvent) => {
        props.selectPayment(event.target.value);
    };

    return (
        <FormControl
            className='select-client-box'
            variant="filled"
            sx={{
                div: {
                    border: 0,
                    borderRadius: '15px',
                    backgroundColor: '#333333',
                    color: '#FFFFFF',
                    '&:after': {border: 0, borderRadius: '15px', color: '#333333'},
                    '&:before': {border: 0, borderRadius: '15px', color: '#333333'},
                },
                label: {color: '#696868', fontWeight: 'bold'},
                svg: {color: '#FFFFFF'}
            }}
        >
            <InputLabel id="demo-simple-select-filled-label">Wybierz sposób płatności</InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={props.paymentMethod}
                onChange={handleChange}
                className='select-client-option'
            >
                <MenuItem value='Gotówka'>Gotówka</MenuItem>
                <MenuItem value='Przelew'>Przelew</MenuItem>
            </Select>
        </FormControl>
    )
}