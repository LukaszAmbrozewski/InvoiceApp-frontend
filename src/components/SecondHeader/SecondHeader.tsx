import React from 'react';
import './SecondHeader.css'

interface Props {
    secondHeaderText: string;
}

export const SecondHeader = (props: Props) => {

    return (
        <h2 className="second-header">{props.secondHeaderText}</h2>
    )
}