import React from 'react';
import Header from '../../components/header/header.component';
import Menu from '../../components/menu/menu.component';
import {Card} from '../../components/card/card.component';
import "./homepage.styles.scss";

const HomePage = () => (
    <div className='homepage'>
        <div className='homepage__img'>
            <Header/>
            <Card/>
            <Menu/>
        </div>
    </div>
);

export default HomePage;