import React from 'react';
import style from './HomeContent.module.scss'
import CustomButton from "../../../Utilities/CustomButton/CustomButton";
import AboutSection from "./AboutSection/AboutSection";
import {FiInstagram} from "react-icons/fi";
import {AiFillFacebook} from "react-icons/ai";
import {BiLogoTwitter} from "react-icons/bi";
import {NavLink} from "react-router-dom";

const HomeContent = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.containerNetworks}>
                    <span></span>
                    <div className={style.networkItems}>
                       <NavLink to={'#'}> <FiInstagram></FiInstagram></NavLink>
                       <NavLink to={'#'}> <AiFillFacebook></AiFillFacebook></NavLink>
                       <NavLink to={'#'}> <BiLogoTwitter></BiLogoTwitter></NavLink>
                    </div>

                    <span></span>
                </div>
                <div className={style.containerInfo}>
                    <h1>Self-drive travel in the Southern Hemisphere</h1>
                    <AboutSection></AboutSection>
                </div>
                <div className={style.containerWays}>
                    Ways
                </div>
            </div>

            <div className={style.addressContainer}>
                address
            </div>
            <div className={style.photosContainer}>
                photos
            </div>
        </div>
    );
};

export default HomeContent;