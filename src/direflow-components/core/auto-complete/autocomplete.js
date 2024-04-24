import React from 'react';
import Select from 'react-select';

const AutoComplete = (props) => {

    return (
        <>
            <Select
                defaultValue={props.value}
                className="react-select"
                onChange={(values) => props.onChange(values)}
                options={props.options}
                value={props.value}
            />
        </>
    );
}
export default AutoComplete;

