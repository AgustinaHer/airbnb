import React from 'react';
import Logo from './Rectangle 4.jpg';
import logo from './Rectangle 5.jpg';
import Logo1 from './Rectangle 6.jpg';

import './explorer.styles.scss';

const Explorer = () => (
    <div className='explorer'>
        <h1>Explorer Airbnb</h1>
        <div className='explorer__card'>
            <div className='explorer__card__item'>
                <img src={Logo} alt=''/>
                <span className='explorer__card__item__title'>
                    Logements
                </span>    
            </div>
            <div className='explorer__card__item'>  
                <img src={logo} alt=''/>
                <span className='explorer__card__item__title'>
                    Expériences
                </span>
            </div>       
            <div className='explorer__card__item'> 
                <img src={Logo1} alt=''/>
                <span className='explorer__card__item__title'>
                    Aventures
                </span>
            </div>
        </div>
    </div>
);

export default Explorer;