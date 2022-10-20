import React, {useState} from 'react'
import {PaymentSelect} from "../PaymentSelect/PaymentSelect";
import {isMobile} from "react-device-detect";
import '../ComponentsStyles.css'
import {PaymentForm} from "../PaymentForm/PaymentForm";

export const InvoicePaymentBox = () => {
    const [paymentMethod, setPaymentMethod] = useState<string>('')

    const changePaymentMethod = (paymentMethod: string) => {
        setPaymentMethod(paymentMethod)
    }

    return(
        <div className={isMobile ? 'data-box-mobile' : 'data-box'}>
            <div className='form-box'>
                <p className="field-description-text">Sposób płatności</p>
                <PaymentSelect paymentMethod={paymentMethod} selectPayment={changePaymentMethod}/>
                <PaymentForm buttonText='Dalej' paymentMethod={paymentMethod}/>
            </div>
        </div>
    )
}