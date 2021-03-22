import React from 'react';

import './form-input.styles.scss';

const FormInput = ({label}) => (
    <div className='group'>
        <input className='group__form-input' placeholder={label}/>
    </div>
);

export default FormInput;