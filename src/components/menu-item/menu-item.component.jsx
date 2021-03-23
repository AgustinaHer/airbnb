import React from 'react';
import Explorer from '../explorer/explorer.component';
import Hebergements from '../Hebergements/hebergements.component';
import Decouvrez from '../decouvrez/decouvrez.component';
import Logements from '../logements/logements.component';
import Experiences from '../experiences/experiences.component';
import Destinations from '../destinations/destinations.component';

import './menu-item.styles.scss';

const MenuItem = () => (
    <div className='menu-item'>
        <Explorer/>
        <Hebergements/>
        <Decouvrez/>
        <Logements/>
        <Experiences/>
        <Destinations/>  
    </div>
);

export default MenuItem;