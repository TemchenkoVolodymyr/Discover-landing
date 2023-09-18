import React from 'react';
import CustomSlider from "../../Utilities/Slider/CustomSlider";
import firstItemSlider from '../../assets/environment/beach.jpg'
import secondItemSlider from '../../assets/environment/hall.jpg'
import thirdItemSlider from '../../assets/environment/mountains.jpg'
import fourthItemSlider from '../../assets/environment/rainbow.jpg'

import firstAnimal from '../../assets/animals/bird.jpg'
import secondAnimal from '../../assets/animals/birdSecond.jpg'
import thirdAnimal from '../../assets/animals/idda.jpg'
import fourthAnimal from '../../assets/animals/kangaro.jpg'
import FifthAnimal from '../../assets/animals/koala.jpg'
import SixthAnimal from '../../assets/animals/marian.jpg'
import SeventhAnimal from '../../assets/animals/tongue.jpg'
import naturalImage from '../../assets/natural.png'
import style from './PhotosSection.module.scss'

const PhotosSection = () => {

    const arrayOfItemsSlider = [firstItemSlider, secondItemSlider, thirdItemSlider, fourthItemSlider]

    const arrayOfAnimalsItemsSlider = [firstAnimal, secondAnimal, thirdAnimal, fourthAnimal, FifthAnimal, SixthAnimal, SeventhAnimal]
    return (
        <div className={style.container}>
            <CustomSlider images={arrayOfItemsSlider}>
            </CustomSlider>
            <div className={style.wrapperTitle}>
                <img src={naturalImage} alt={'item-slider'}/>
            </div>

            <CustomSlider images={arrayOfAnimalsItemsSlider}></CustomSlider>
        </div>
    );
};

export default PhotosSection;