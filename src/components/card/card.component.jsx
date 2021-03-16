import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './card.styles.scss';


export const Card = () => (
    <div className='card'>
        <h1>
            Réservez des hébergement et des activités uniques.
        </h1>
        <div className='item'>
            <p>Où</p>
            <div className='item-details'>
                <FormInput label='Partout'/>
            </div>
        </div>
        <div className='item'>
            <p>Arrivée Départ</p> 
            <div className='item-details'>
                <FormInput label='jj/mm/aaaa'/>
            </div>
        </div>
        <div className='item'>
            <p>VOYAGEURS</p>
            <div className='item-details'>
            <FormInput label='Voyaguers'/>
            </div>
        </div>
        <div className='button'>
            <CustomButton type='submit'>Rechercher</CustomButton>
        </div>
    </div>
);