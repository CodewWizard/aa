import React, { useState, useEffect } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const ToggleButtonComponent = (props) => {
  const [radioValue, setRadioValue] = useState(props.value);
  const [isValid, setIsValid] = useState(true);
  const onToggle = (e, value) => {
    setIsValid(true);
    setRadioValue(value);
    props.onChange(value);
  }

  useEffect(() => {
    setRadioValue(props.value);
  }, [props]);

  useEffect(() => {
    setRadioValue(props.value);
    if(props.value?.toString()?.length > 0){
      setIsValid(true);
    }
  }, [props.value]);

  return (
    <div className="custToggle">
      <ButtonGroup name={"btnGrp_" + props.id} value={props.value} className={ isValid ? "" : "error-show"}>
        {props.options.map((radio, idx) => (
          <ToggleButton
            key={`${props.id}-option-${idx}`}
            id={`radio-${props.id}-${idx}`}
            type="radio"
            className='btn-group-label'
            variant={idx % 2 ? 'buttNo' : 'buttYes'}
            name={"btn_" + props.id + idx}
            value={radio.value}
            disabled={props.disabled}
            checked={radioValue === radio.value}
            onChange={(e) => onToggle(e, radio.value)}
            required
          >
            {radio.label}
          </ToggleButton>
        ))}        
      </ButtonGroup>
      { props.required && <input type={"text"} style={{display: "none"}} id={props.id} required value={radioValue} onInvalid={(e) => { setIsValid(false); }} /> } 
      {/* error that must */}
    </div>
  );
}

export default ToggleButtonComponent;
