import React, {useState} from 'react';
import style from './CustomSlider.module.scss'

interface SliderPropsType {
    images: Array<string>
    children?: any
}

const CustomSlider = (props: SliderPropsType) => {

    const {images} = props

    const [indexOfImage, setIndexOfImage] = useState(1)

    return (
        <div className={style.container}>
            <div className={style.wrapperImage}>
                <img src={images[indexOfImage]} alt={'slider-item'}/>
            </div>
            <div className={style.wrapperSlider}>
                {images.map((image:string, index:number) => <img className={indexOfImage === index ? style.active : undefined} onClick={() => setIndexOfImage(index)} src={image}
                                                   alt={'slider-item'}/>)}
            </div>
        </div>
    );
};

export default CustomSlider;