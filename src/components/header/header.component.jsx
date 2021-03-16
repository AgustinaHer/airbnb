import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Vector.svg';
import './header.styles.css';

const Header= ({currentUser}) => (
    <div className='header'>
    <BrowserRouter>
        <Link className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option'>
                Français (FR) 
            </Link>
            <Link className='option'>
                EUR €  
            </Link>
            <Link className='option'>
                Devenir hôte 
            </Link>
            <Link className='option'>
                Créer son expérience 
            </Link>
            <Link className='option'>
                Aide 
            </Link>
            <Link className='option'>
                Inscription  
            </Link>
            <Link className='option'>
                Connexion  
            </Link>
        </div>
        </BrowserRouter>
    </div>
);

export default Header;
            