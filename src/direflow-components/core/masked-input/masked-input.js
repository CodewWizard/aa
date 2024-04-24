import Cleave from 'cleave.js/react';
import cleavePhone from 'cleave.js/dist/addons/cleave-phone.us';
import React, { useState } from 'react';

const MaskedInput = (props) => {
    const [maskedValue, setMaskedValue] = useState('');

    const onMaskedFieldChange = (event) => {
        setMaskedValue(event.target.rawValue);
        props.onChange(event);
    };

    return (
            <Cleave
                {...props}
                onChange={onMaskedFieldChange}
            />
    );
};

export default MaskedInput;
