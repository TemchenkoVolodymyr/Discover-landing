import React from 'react';
import style from './HomeContent.module.scss'
import AboutSection from "./AboutSection/AboutSection";
import {FiInstagram} from "react-icons/fi";
import {AiFillFacebook} from "react-icons/ai";
import {BiLogoTwitter} from "react-icons/bi";
import {NavLink} from "react-router-dom";
import AddressSection from "./AddressSection/AddressSection";

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
                    <h1>Self-drive travel in the <span>Southern Hemisphere</span></h1>
                    <AboutSection></AboutSection>
                </div>
                <div className={style.containerWays}>
                    Ways
                </div>
            </div>

            <AddressSection></AddressSection>
            <div className={style.photosContainer}>
                photos
            </div>
        </div>
    );
};

export default HomeContent;