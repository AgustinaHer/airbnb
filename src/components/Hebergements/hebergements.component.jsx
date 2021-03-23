import React from 'react';

import './hebergements.styles.scss';
import {BrowserRouter, Link} from 'react-router-dom';
import {ReactComponent as Logo} from './Vector.svg';

import flecha from './Vector 1.jpg';

const Hebergements = () => (
    <div className='hebergements'>
        <h1>Hébergements Airbnb Plus</h1>
            <span className='hebergements__subtitle'>
              Une sélection de logements vérifiés selon des critères de qualité et de design
            </span>
            <div className='hebergements__details'>
                <div className='hebergements__details__img'>
                    <BrowserRouter>
                        <Link className='hebergements__details__img__logo-container'>
                            <Logo className='logo' />
                        </Link>
                    </BrowserRouter>
                    <div className='hebergements__details__img__button'>
                        <h1 className='hebergements__details__img__button__text'>
                            Découvrir des logements
                        </h1>
                        <img src={flecha} alt=''/>
                    </div>
                </div>
            </div>
    </div>
);

export default Hebergements;