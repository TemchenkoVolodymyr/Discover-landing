import React from 'react';
import style from './CustomButton.module.scss'
import {GiBranchArrow} from "react-icons/gi";

interface CustomButtonPropsType  {
    name : string
}
const CustomButton = (props:CustomButtonPropsType) => {
    const {name} = props
    return (
       <>
           <button className={style.button}>{name} <GiBranchArrow fontSize={30}></GiBranchArrow></button>
       </>
    );
};

export default CustomButton;