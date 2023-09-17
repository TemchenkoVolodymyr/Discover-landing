import React from 'react';
import style from './NetworksSection.module.scss'
import {NavLink} from "react-router-dom";
import {FiInstagram} from "react-icons/fi";
import {AiFillFacebook} from "react-icons/ai";
import {BiLogoTwitter} from "react-icons/bi";

const NetworksSection = () => {
    return (
        <div className={style.container}>
            <span></span>
            <div className={style.networkItems}>
                <NavLink to={'#'}> <FiInstagram></FiInstagram></NavLink>
                <NavLink to={'#'}> <AiFillFacebook></AiFillFacebook></NavLink>
                <NavLink to={'#'}> <BiLogoTwitter></BiLogoTwitter></NavLink>
            </div>

            <span></span>
        </div>
    );
};

export default NetworksSection;