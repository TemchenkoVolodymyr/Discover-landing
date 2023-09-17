import React from 'react';
import style from './AddressSection.module.scss'
import {PiMapPinLineDuotone} from "react-icons/pi";

const AddressSection = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.icon}>
                    <PiMapPinLineDuotone></PiMapPinLineDuotone>
                    <span></span>
                </div>
                <p className={style.city}>Oakland </p>
                <p>Paihia</p>
                <p>Coromandel Peninsula</p>

            </div>
        </div>
    );
};

export default AddressSection;