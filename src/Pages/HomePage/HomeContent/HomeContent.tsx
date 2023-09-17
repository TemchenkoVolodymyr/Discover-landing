import React from 'react';
import style from './HomeContent.module.scss'
import AboutSection from "./AboutSection/AboutSection";
import AddressSection from "./AddressSection/AddressSection";
import NetworksSection from "./NetworksSection/NetworksSection";
import mapImage from '../../../assets/map.png'

const HomeContent = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <NetworksSection></NetworksSection>
                <div className={style.containerInfo}>
                    <h1>Self-drive travel in the <span>Southern Hemisphere</span></h1>
                    <AboutSection></AboutSection>
                </div>
                <div className={style.containerWays}>
                 <img src={mapImage} alt={'map'}/>
                </div>
            </div>
            <AddressSection></AddressSection>
        </div>
    );
};

export default HomeContent;