import React from 'react';
import Logo from "./Logo/Logo";
import HomeContent from "./HomeContent/HomeContent";
import style from './HomePage.module.scss'
import bg from '../../assets/2bgg.png'
const HomePage = () => {
    return (
        <div className={style.container} style={{backgroundImage:`url(${bg})`}}>
            <Logo></Logo>
            <HomeContent></HomeContent>
        </div>
    );
};

export default HomePage;