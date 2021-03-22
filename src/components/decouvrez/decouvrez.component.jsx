import React from 'react';
import './decouvrez.styles.scss';

import Img0 from './Image(0).jpg';
import Img1 from './Image(1).jpg';
import Img2 from './Image(2).jpg';
import Img3 from './Image(3).jpg';
import Img4 from './Image(4).jpg';
import Img5 from './Image(5).jpg';

import Logo from './Star 1.jpg';

const Decouvrez = () => (
    <div className='decouvrez'>
        <div className='decouvrez__card'>
            <img src={Img0} alt=''/>
            <span className='decouvrez__card__name'>
                Cayman Islands
            </span>
            <h1 className='decouvrez__card__title'>
                2 Nights PACKAGE All Inclusive
            </h1>
            <span className='decouvrez__card__text'>
                À partir de 577€/personne - 3 jours
            </span>
            <h2 className='decouvrez__card__puntaje'>
                5.0
                <img className='decouvrez__card__puntaje__logo' src={Logo} alt=''/>
            </h2>
        </div>
        <div className='decouvrez__card'>
            <img src={Img1} alt=''/>
            <span className='decouvrez__card__name'>
                Uruguay
            </span>
            <h1 className='decouvrez__card__title'>
                2 Nights PACKAGE All Inclusive
            </h1>
            <span className='decouvrez__card__text'>
                À partir de 577€/personne - 3 jours
            </span>
            <h2 className='decouvrez__card__puntaje'>
                5.0
                <img className='decouvrez__card__puntaje__logo' src={Logo} alt=''/>
            </h2>
        </div>
        <div className='decouvrez__card'>
            <img src={Img2} alt=''/>
            <span className='decouvrez__card__name'>
                Iceland
            </span>
            <h1 className='decouvrez__card__title'>
                2 Nights PACKAGE All Inclusive
            </h1>
            <span className='decouvrez__card__text'>
                À partir de 577€/personne - 3 jours
            </span>
            <h2 className='decouvrez__card__puntaje'>
                5.0
                <img className='decouvrez__card__puntaje__logo' src={Logo} alt=''/>
            </h2>
        </div>
        <div className='decouvrez__card'>
            <img src={Img3} alt=''/>
            <span className='decouvrez__card__name'>
                Mongolia
            </span>
            <h1 className='decouvrez__card__title'>
                2 Nights PACKAGE All Inclusive
            </h1>
            <span className='decouvrez__card__text'>
                À partir de 577€/personne - 3 jours
            </span>
            <h2 className='decouvrez__card__puntaje'>
                5.0
                <img className='decouvrez__card__puntaje__logo' src={Logo} alt=''/>
            </h2>
        </div>
        <div className='decouvrez__card'>
            <img src={Img4} alt=''/>
            <span className='decouvrez__card__name'>
                Bahrain
            </span>
            <h1 className='decouvrez__card__title'>
                2 Nights PACKAGE All Inclusive
            </h1>
            <span className='decouvrez__card__text'>
                À partir de 577€/personne - 3 jours
            </span>
            <h2 className='decouvrez__card__puntaje'>
                5.0
                <img className='decouvrez__card__puntaje__logo' src={Logo} alt=''/>
            </h2>
        </div>
        <div className='decouvrez__card'>
            <img src={Img5} alt=''/>
            <span className='decouvrez__card__name'>
                Bosnia and Herzegovina
            </span>
            <h1 className='decouvrez__card__title'>
                2 Nights PACKAGE All Inclusive
            </h1>
            <span className='decouvrez__card__text'>
                À partir de 577€/personne - 3 jours
            </span>
            <h2 className='decouvrez__card__puntaje'>
                5.0
                <img className='decouvrez__card__puntaje__logo' src={Logo} alt=''/>
            </h2>
        </div>
    </div>
);

export default Decouvrez;