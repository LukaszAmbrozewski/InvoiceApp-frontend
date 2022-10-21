import React, { useState } from 'react';
import './OneProductOnInvoice.css'
import { Item } from "types";
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {removeOneItem} from "../../utils/removeOneItem";

interface Props {
    oneItemInfo: Item;
    updateData: () => void;
}

export const OneProductOnInvoice = (props: Props) => {
    const [showDetails, setShowDetails] = useState<boolean>(false)

    const changeVisibility = () => {
        setShowDetails(!showDetails);
    }

    const removeItem = async (itemId: string) => {
        await removeOneItem(itemId);
        props.updateData();
    }

    return(
        <>
            {showDetails ? (
                <div className='full-product-info-box'>
                    <div className='main-product-box'>
                        <div className='main-product-info-description'>
                            <p className='product-main-info'>{props.oneItemInfo.name}</p>
                            <p className='product-main-info'>{`${props.oneItemInfo.totalGrossValue.toFixed(2)} zł`}</p>
                        </div>
                        <div className='item-icons-box'>
                            <div className='delete-product-icon' onClick={() => removeItem(props.oneItemInfo.id)}>
                                <DeleteIcon/>
                            </div>
                            <div className='show-details-icon' onClick={changeVisibility}>
                                {!showDetails ?  <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/>}
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='product-description'>Produkt lub usługa</p>
                        <p className='product-info'>{props.oneItemInfo.name}</p>
                        <p className='product-description'>Cena netto</p>
                        <p className='product-info'>{`${props.oneItemInfo.netValue.toFixed(2)} zł`}</p>
                        <p className='product-description'>Ilość</p>
                        <p className='product-info'>{`${props.oneItemInfo.quantity} szt.`}</p>
                        <p className='product-description'>Stawka podatku VAT</p>
                        <p className='product-info'>{`${props.oneItemInfo.taxRate} %`}</p>
                        <p className='product-description'>Kwota VAT</p>
                        <p className='product-info'>{`${props.oneItemInfo.taxValue.toFixed(2)} zł`}</p>
                        <p className='product-description'>Łączna wartość brutto</p>
                        <p className='product-info'>{`${props.oneItemInfo.totalGrossValue.toFixed(2)} zł`}</p>
                    </div>
                </div>
            ) : (
                <div className='main-product-box main-product-box-margin'>
                    <div className='main-product-info-description'>
                        <p className='product-main-info'>{props.oneItemInfo.name}</p>
                        <p className='product-main-info'>{`${props.oneItemInfo.totalGrossValue.toFixed(2)} zł`}</p>
                    </div>
                    <div className='item-icons-box'>
                        <div className='delete-product-icon' onClick={() => removeItem(props.oneItemInfo.id)}>
                            <DeleteIcon/>
                        </div>
                        <div className='show-details-icon' onClick={changeVisibility}>
                            {!showDetails ?  <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/>}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}