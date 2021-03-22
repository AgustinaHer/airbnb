import React from 'react';
import Logo from './Rectangle 7.jpg';
import './hebergements.styles.scss';

const Hebergements = () => (
    <div className='hebergements'>
        <h1>Hébergements Airbnb Plus</h1>
            <span className='hebergements__subtitle'>
              Une sélection de logements vérifiés selon des critères de qualité et de design
            </span>
            <div className='hebergements__details'>
                <img src={Logo} alt=''/>
            </div>
    </div>
);

export default Hebergements;