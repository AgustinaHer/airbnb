import React from 'react';
import Logo from './Rectangle 4.jpg';
import logo from './Rectangle 5.jpg';
import Logo1 from './Rectangle 6.jpg';

import './explorer-card.styles.scss';

const ExplorerCard = () => (
    <div className='explorer-card'>
        <div className='explorer-card__card'>
            <img src={Logo} alt=''/>
            <span className='explorer-card__card__title'>
                Logements
            </span>    
        </div>
        <div className='explorer-card__card'>  
            <img src={logo} alt=''/>
            <span className='explorer-card__card__title'>
                Expériences
            </span>
        </div>       
        <div className='explorer-card__card'> 
            <img src={Logo1} alt=''/>
            <span className='explorer-card__card__title'>
                Aventures
            </span>
        </div>
    </div>
);

export default ExplorerCard;