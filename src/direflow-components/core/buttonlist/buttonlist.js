import React, { useState, useEffect } from "react";

const RadioButton = (props) => {
  const onToggle = (e, value) => {
    props.onChange(value);
  };

  return (
    <>
      <div className={props.parentClass}>
        {props.title}
        <div className={props?.inpParentClass}>
          {props.options.map((radio, idx) => (
            <>
              <input
                disabled ={props.disabled}
                checked={props.value == radio.value ? true : false}
                key={`${radio.id}-option-${radio.key}-input`}
                onClick={(e) => onToggle(e, radio.value)}
                required
                type="radio"
                id={`radio-${radio.key}`}
                name="buttonlist"
                className={props?.inpInputClass}
              />
              <label
                key={`${radio.id}-option-${radio.key}-label`}
                htmlFor={`radio-${radio.key}`}
                className={props?.inplabelClass}
              >
                {radio.label}
              </label>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default RadioButton;
