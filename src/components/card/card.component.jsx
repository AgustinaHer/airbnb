import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './card.styles.scss';


export const Card = () => (
    <div className='card'>
        <h1>Réservez des hébergement et des activités uniques.</h1>
        <div className='card__item-container'>
            <div className='card__item-container__item'>
                <p className='card__item-container__item__title'>Où</p> 
                <div className='card__item-container__item__details'>
                    <FormInput label='Partout'/>  
                </div>
            </div>
        </div>
        <div className='card__item-container'>
            <div className='card__item-container__item-ad'>
                <p className='card__item-container__item-ad__title'>Arrivée</p> 
                <div className='card__item-container__item-ad__details'>
                    <FormInput label='jj/mm/aaaa'/>
                </div>
            </div>
            <div className='card__item-container__item-ad'>
                <p className='card__item-container__item-ad__title'>Départ</p> 
                <div className='card__item-container__item-ad__details'>
                    <FormInput label='jj/mm/aaaa'/>
                </div>
        </div>
        </div>
        <div className='card__item-container'>
            <div className='card__item-container__item'>
                <p className='card__item-container__item-ad__title'>Voyaguers</p>
                <div className='card__item-container__item__details'>
                <FormInput label='Voyaguers'/>
                </div>
            </div>
        </div>
        <div className='button'>
            <CustomButton type='submit'>Rechercher</CustomButton>
        </div>
    </div>
);