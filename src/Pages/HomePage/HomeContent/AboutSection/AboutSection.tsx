import React from 'react';
import style from './AboutSection.module.scss'
import CustomButton from "../../../../Utilities/CustomButton/CustomButton";

const AboutSection = () => {
    return (
        <div className={style.container}>
            <h3>About</h3>
            <span></span>
            <p>We invite you to take an
                exciting self-drive trip through
                the fairy-tale beautiful countries of
                the Southern Hemisphere - New Zealand and Australia!
                These countries attract tourists from all over the world,
                primarily with their unique nature and breathtaking landscapes,
                which are best enjoyed from the window of a car, stopping along the way
                in picturesque locations. You will see volcanic plateaus and geysers, a traditional
                hangi dinner in a Maori village, pristine forests, white sandy beaches and enchanting
                nature reserves! Such a trip will stay in your memory forever!</p>
            <CustomButton name={'Explore'}></CustomButton>
        </div>
    );
};

export default AboutSection;