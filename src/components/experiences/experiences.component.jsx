import React from 'react';

import im0 from './Image(0).jpg';
import im1 from './Image(1).jpg';
import im2 from './Image(2).jpg';
import im3 from './Image(3).jpg';
import im4 from './Image(4).jpg';
import im5 from './Image(5).jpg';

import star from '../decouvrez/Star 1.jpg';

import './experiences.styles.scss';

const Experiences = () => (
    <div className='experiences'>
        <h1>Expériences très bien notées</h1>
        <div className='experiences__card'>
            <div className='experiences__card__item'>
                <img src={im0} alt=''/>
                <span className='experiences__card__item__name'>
                    Cayman Islands
                </span>
                <h1 className='experiences__card__item__title'>
                    2 Nights PACKAGE All Inclusive
                </h1>
                <span className='experiences__card__item__text'>
                    À partir de 577€/personne - 3 jours
                </span>
                <h2 className='experiences__card__item__puntaje'>
                    5.0
                    <img className='experiences__card__item__puntaje__star' src={star} alt=''/>
                </h2>
            </div>
            <div className='experiences__card__item'>
                <img src={im1} alt=''/>
                <span className='experiences__card__item__name'>
                    Uruguay
                </span>
                <h1 className='experiences__card__item__title'>
                    2 Nights PACKAGE All Inclusive
                </h1>
                <span className='experiences__card__item__text'>
                    À partir de 577€/personne - 3 jours
                </span>
                <h2 className='experiences__card__item__puntaje'>
                    5.0
                    <img className='experiences__card__item__puntaje__star' src={star} alt=''/>
                </h2>
            </div>
            <div className='experiences__card__item'>
                <img src={im2} alt=''/>
                <span className='experiences__card__item__name'>
                    Iceland
                </span>
                <h1 className='experiences__card__item__title'>
                    2 Nights PACKAGE All Inclusive
                </h1>
                <span className='experiences__card__item__text'>
                    À partir de 577€/personne - 3 jours
                </span>
                <h2 className='experiences__card__item__puntaje'>
                    5.0
                    <img className='experiences__card__item__puntaje__star' src={star} alt=''/>
                </h2>
            </div>
            <div className='experiences__card__item'>
                <img src={im3} alt=''/>
                <span className='experiences__card__item__name'>
                    Mongolia
                </span>
                <h1 className='experiences__card__item__title'>
                    2 Nights PACKAGE All Inclusive
                </h1>
                <span className='experiences__card__item__text'>
                    À partir de 577€/personne - 3 jours
                </span>
                <h2 className='experiences__card__item__puntaje'>
                    5.0
                    <img className='experiences__card__item__puntaje__star' src={star} alt=''/>
                </h2>
            </div>
            <div className='experiences__card__item'>
                <img src={im4} alt=''/>
                <span className='experiences__card__item__name'>
                    Bahrain
                </span>
                <h1 className='experiences__card__item__title'>
                    2 Nights PACKAGE All Inclusive
                </h1>
                <span className='experiences__card__item__text'>
                    À partir de 577€/personne - 3 jours
                </span>
                <h2 className='experiences__card__item__puntaje'>
                    5.0
                    <img className='experiences__card__item__puntaje__star' src={star} alt=''/>
                </h2>
            </div>
            <div className='experiences__card__item'>
                <img src={im5} alt=''/>
                <span className='experiences__card__item__name'>
                    Bosnia and Herzegovina
                </span>
                <h1 className='experiences__card__item__title'>
                    2 Nights PACKAGE All Inclusive
                </h1>
                <span className='experiences__card__item__text'>
                    À partir de 577€/personne - 3 jours
                </span>
                <h2 className='experiences__card__item__puntaje'>
                    5.0
                    <img className='experiences__card__item__puntaje__star' src={star} alt=''/>
                </h2>
            </div>
        </div>
    </div>
);

export default Experiences;