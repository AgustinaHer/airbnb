import React from 'react';

import './menu.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

const Menu = () => (
    <div className='menu'>
        <MenuItem/>
        <h1>Expériences très bien notées</h1>
        <div className='menu__details'>
            <img src='../card/Rectangle 4.jpg' alt='' />
        </div>
        <h1>Destinations Airbnb Plus à la Une</h1>
        <div className='menu__details'>
            <img src='../card/Rectangle 4.jpg' alt='' />
        </div>
    </div>
    
);

export default Menu;