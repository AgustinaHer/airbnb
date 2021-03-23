import React from 'react';

import './logements.styles.scss';

import im0 from './Rectangle 7.jpg';
import im1 from './Rectangle 7(1).jpg';
import im2 from './Rectangle 7(2).jpg';
import im3 from './Rectangle 7(3).jpg';
import im4 from './Rectangle 7(4).jpg';
import im5 from './Rectangle 7(5).jpg';
import im6 from './Rectangle 7(6).jpg';
import im7 from './Rectangle 7(7).jpg';

import RedStar from './StarRoja.jpg'; 

const Logements = () => (
    <div className='logements'>
        <h1>Logements dans le monde entier</h1>
        <div className='card'>
            <div className='card__item'>
                <img src={im0} alt=''/>
                    <h1 className='card__item__superhost'>
                        SUPERHOST
                    </h1>
                    <h1 className='card__item__name'>
                        Toledo
                    </h1>
                    <h1 className='card__item__puntaje'>
                        <img src={RedStar} alt=''/>
                        4,98
                    </h1>
                    
                    <h1 className='card__item__text'>
                        À partir de 577€/personne - 3 jours
                    </h1>
            </div>
            <div className='card__item'>
                <img src={im1} alt=''/>
                <h1 className='card__item__superhost'>
                    SUPERHOST
                </h1>
                <h1 className='card__item__name'>
                        Mesa
                    </h1>
                <h1 className='card__item__puntaje'>
                    <img src={RedStar} alt=''/>
                    4,98
                </h1>
                    
                <h1 className='card__item__text'>
                    À partir de 577€/personne - 3 jours
                </h1>
            </div>
            <div className='card__item'>
                <img src={im2} alt=''/>
                <h1 className='card__item__superhost'>
                    SUPERHOST
                </h1>
                <h1 className='card__item__name'>
                    Utica
                </h1>
                <h1 className='card__item__puntaje'>
                    <img src={RedStar} alt=''/>
                    4,98
                </h1>
                
                <h1 className='card__item__text'>
                    À partir de 577€/personne - 3 jours
                </h1>
            </div>
            <div className='card__item'>
                <img src={im3} alt=''/>
                <h1 className='card__item__superhost'>
                    SUPERHOST
                </h1>
                <h1 className='card__item__name'>
                    South Bend
                </h1>
                <h1 className='card__item__puntaje'>
                    <img src={RedStar} alt=''/>
                    4,98
                </h1>
                
                <h1 className='card__item__text'>
                    À partir de 577€/personne - 3 jours
                </h1>
            </div>
            <div className='card__item'>
                <img src={im4} alt=''/>
                <h1 className='card__item__superhost'>
                    SUPERHOST
                </h1>
                <h1 className='card__item__name'>
                    Toledo
                </h1>
                <h1 className='card__item__puntaje'>
                    <img src={RedStar} alt=''/>
                    4,98
                </h1>
                <h1 className='card__item__text'>
                    À partir de 577€/personne - 3 jours
                </h1>
            </div>
            <div className='card__item'>
                <img src={im5} alt=''/>
                <h1 className='card__item__superhost'>
                    SUPERHOST
                </h1>
                <h1 className='card__item__name'>
                    Mesa
                </h1>
                <h1 className='card__item__puntaje'>
                    <img src={RedStar} alt=''/>
                    4,98
                </h1>
                <h1 className='card__item__text'>
                    À partir de 577€/personne - 3 jours
                </h1>
            </div>
            <div className='card__item'>
                <img src={im6} alt=''/>
                <h1 className='card__item__superhost'>
                    SUPERHOST
                </h1>
                <h1 className='card__item__name'>
                    Utica
                </h1>
                <h1 className='card__item__puntaje'>
                    <img src={RedStar} alt=''/>
                    4,98
                </h1>
                
                <h1 className='card__item__text'>
                    À partir de 577€/personne - 3 jours
                </h1>
            </div>
            <div className='card__item'>
                <img src={im7} alt=''/>
                <h1 className='card__item__superhost'>
                    SUPERHOST
                </h1>
                <h1 className='card__item__name'>
                    South Bend
                </h1>
                <h1 className='card__item__puntaje'>
                    <img src={RedStar} alt=''/>
                    4,98
                </h1>
                
                <h1 className='card__item__text'>
                    À partir de 577€/personne - 3 jours
                </h1>
            </div>
        </div>
    </div>
);

export default Logements;