import React from 'react';
import ExplorerCard from '../explorer-card/explorer-card.component';
import Hebergements from '../Hebergements/hebergements.component';
import Decouvrez from '../decouvrez/decouvrez.component';
import Logements from '../logements/logements.component';

import './menu-item.styles.scss';

const MenuItem = () => (
    <div className='menu-item'>
        <h1>Explorer Airbnb</h1>
        <ExplorerCard/>
        <Hebergements/>
        <h1>Découvrez les aventures Airbnb</h1>
        <span>
            Voyages de plusieurs jours organisés 
            par des experts locaux avec activités, 
            repas et logements compris
        </span>
        <Decouvrez/>
        <Logements/>
        
    </div>
);

export default MenuItem;