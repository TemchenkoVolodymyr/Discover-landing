import React from 'react';
import flag from '../../../assets/australia.png'
import style from './Logo.module.scss'
const Logo = () => {
    return (
        <div className={style.container}>
            <p><span>Australian</span>Tourism</p>
            <img src={flag} alt={'logo-image'}/>
        </div>
    );
};

export default Logo;