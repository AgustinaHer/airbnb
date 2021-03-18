import React from 'react';
import './menu-item.styles.scss';

const MenuItem = () => (
    <div className='menu-item'>
        <h1>Explorer Airbnb</h1>
        <div className='menu-item__details'>
            <img src='../card/Rectangle 4.jpg' alt='' />
            <p>Logements</p>
            <img src='./Rectangle 5.jpg' alt=''/>
            <p>Expériences</p>
            <img src='./Rectangle 6.jpg' alt=''/>
            <p>Aventures</p>
        </div>
        <h1>Hébergements Airbnb Plus</h1>
        <span>
            Une sélection de logements vérifiés selon des critères de qualité et de design
        </span>
        <div className='menu-item__details'>
            <img src='./Rectangle 7.jpg' alt='' />
        </div>
        <h1>Découvrez les aventures Airbnb</h1>
        <div className='menu-item__details'>
            <img src='./Image(0).jpg' alt='' />
            <img src='./Image(1).jpg' alt=''/>
            <img src='./Image(2).jpg' alt=''/>
            <img src='./Image(3).jpg' alt=''/>
            <img src='./Image(4).jpg' alt=''/>
            <img src='./Image(5).jpg' alt=''/>
        </div>
        <h1>Logements dans le monde entier</h1>
        <div className='menu-item__details'>
            <img src='../card/Rectangle 4.jpg' alt='' />
        </div>
        <h1>Expériences très bien notées</h1>
        <div className='menu-item__details'>
            <img src='../card/Rectangle 4.jpg' alt='' />
        </div>
        <h1>Destinations Airbnb Plus à la Une</h1>
        <div className='menu-item__details'>
            <img src='../card/Rectangle 4.jpg' alt='' />
        </div>
    </div>
    
);

export default MenuItem;