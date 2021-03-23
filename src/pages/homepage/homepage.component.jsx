import React from 'react';
import Header from '../../components/header/header.component';
import MenuItem from '../../components/menu-item/menu-item.component';
import {Card} from '../../components/card/card.component';
import "./homepage.styles.scss";

const HomePage = () => (
    <div className='homepage'>
        <div className='homepage__img'>
            <Header/>
            <Card/>
            <MenuItem/>
        </div>
    </div>
);

export default HomePage;