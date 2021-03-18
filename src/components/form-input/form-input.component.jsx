import React from 'react';

import './form-input.styles.scss';

const FormInput = ({label}) => (
    <div className='group'>
        <input className='group__form-input'/>
        <label className='group__form-input-label'>
            {label}
        </label>
    </div>
);

export default FormInput;