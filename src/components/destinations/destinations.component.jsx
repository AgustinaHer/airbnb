import React from 'react';

import logo from './Vector.svg';

import im0 from './Image.jpg';
import im1 from './Image(1).jpg';
import im2 from './Image(2).jpg';

import './destinations.styles.scss';

const Destinations = () => (
    <div className='destinations'>
        <h1>Destinations Airbnb Plus à la Une</h1>
        <span className='destinations__subtitle'>
            Voyages de plusieurs jours organisés par des 
            experts locaux avec activités, 
            repas et logements compris
        </span>
        <div className='destinations__card'>
            <div className='destinations__card__item'>
                <div className='destinations__card__item__img-container'>
                    <img className='destinations__card__item__img-container__img' src={im0} alt=''/>
                    <img className='destinations__card__item__img-container__logo' src={logo} alt=''/>
                </div>
                <h1 className='destinations__card__item__text1'>
                    Plus de 200 séjours vérifiés
                </h1>
                <span className='destinations__card__item__text2'>
                        À partir de 577€/personne - 3 jours
                </span>
            </div>
            <div className='destinations__card__item'>
                <div className='destinations__card__item__img-container'>
                    <img className='destinations__card__item__img-container__img' src={im1} alt=''/>
                    <img className='destinations__card__item__img-container__logo' src={logo} alt=''/>
                </div>
                <h1 className='destinations__card__item__text1'>
                    Plus de 200 séjours vérifiés
                </h1>
                <span className='destinations__card__item__text2'>
                        À partir de 577€/personne - 3 jours
                </span>
            </div>
            <div className='destinations__card__item'>
                <div className='destinations__card__item__img-container'>
                    <img className='destinations__card__item__img-container__img' src={im2} alt=''/>
                    <img className='destinations__card__item__img-container__logo' src={logo} alt=''/>
                </div>
                <h1 className='destinations__card__item__text1'>
                    Plus de 200 séjours vérifiés
                </h1>
                <span className='destinations__card__item__text2'>
                        À partir de 577€/personne - 3 jours
                </span>
            </div>
        </div>
    </div>
);

export default Destinations;