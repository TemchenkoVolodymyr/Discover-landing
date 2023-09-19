import React from 'react';
import style from './PathSection.module.scss'
import firstImage from '../../assets/PathImages/43.png'
import secondImage from '../../assets/PathImages/68.png'
import thirdImage from '../../assets/PathImages/b.png'
import fourthImage from '../../assets/PathImages/70.png'

const PathSection = () => {

    const images = [firstImage, secondImage, thirdImage, fourthImage]
    return (
        <>
            <header>
                <h1><span>Tour </span>itinerary</h1>
            </header>
            <div className={style.container}>
                <div className={style.wrapperBlocks}>
                    <div className={style.firstBlock + " " + style.first}>
                        <p className={style.title}>FIRST <span>New Zealand</span></p>
                        <div className={style.wrapperImages}>
                            {images.map(image => <img src={image} alt={'path'}/>)}
                        </div>
                        <div className={style.wrapperInfo}>
                            <p>Arrival in Auckland is the main gateway to New Zealand, a city that is famous for its
                                graceful lines of the Harbor Bridge, the sparkling waters of Waitemata Harbor and the
                                Hauraki Gulf.</p>
                        </div>
                    </div>
                    <div className={style.firstBlock + " " + style.second}>
                        <p className={style.title}>SECOND <span>New Islands</span></p>
                        <div className={style.wrapperImages}>
                            {images.map(image => <img src={image} alt={'path'}/>)}
                        </div>
                        <div className={style.wrapperInfo}>
                            <p>Arrival in Auckland is the main gateway to New Zealand, a city that is famous for its
                                graceful lines of the Harbor Bridge, the sparkling waters of Waitemata Harbor and the
                                Hauraki Gulf.</p>
                        </div>
                    </div>
                </div>

                <span className={style.centerLine}></span>
                <div className={style.wrapperBlocks}>
                    <div className={style.firstBlock + " " + style.third}>
                        <p className={style.title}>THIRD <span>Feral Cats</span></p>
                        <div className={style.wrapperImages}>
                            {images.map(image => <img src={image} alt={'path'}/>)}
                        </div>
                        <div className={style.wrapperInfo}>
                            <p>Arrival in Auckland is the main gateway to New Zealand, a city that is famous for its
                                graceful lines of the Harbor Bridge, the sparkling waters of Waitemata Harbor and the
                                Hauraki Gulf.</p>
                        </div>
                    </div>
                    <div className={style.firstBlock + " " + style.fourth}>
                        <p className={style.title}>FOURTH <span>Flight of the Eagle</span></p>
                        <div className={style.wrapperImages}>
                            {images.map(image => <img src={image} alt={'path'}/>)}
                        </div>
                        <div className={style.wrapperInfo}>
                            <p>Arrival in Auckland is the main gateway to New Zealand, a city that is famous for its
                                graceful lines of the Harbor Bridge, the sparkling waters of Waitemata Harbor and the
                                Hauraki Gulf.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default PathSection;