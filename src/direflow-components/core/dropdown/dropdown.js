//https://www.npmjs.com/package/react-select
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const Dropdown = (props) => {
    const [isValid, setIsValid] = useState(true);
    const [dummyValue, setDummyValue] = useState("");
    const [val, setVal] = useState(props.value || "");
    const animatedComponents = makeAnimated();


    useEffect(() => {
        // debugger;
        if (typeof props?.value == "number") {
            let val = props?.value?.toString()
            if (val.length > 0) {
                setDummyValue("selected");
                setValue();
            } else {
                setVal('');
                setDummyValue("");
            }
        } else {
            if (props?.value?.length > 0) {
                setDummyValue("selected");
                setValue();
            } else {
                setVal('')
                setDummyValue("");
            }
        }
    }, [props.value])

    const setValue = () => {
        // debugger;
        let value = null;
        if (props.isMulti && (props.options.filter(a => a?.key).length == 0)) {
            value = [props.options.map(a => [...a.options])].flat([2]).filter(c => props.value.includes(c.value))
        }
        else {
            if (props.isMulti)
                value = props.options.filter((c) => props.value.includes(c.value));
            else {
                props.options.filter(c => {
                    if (c?.options == undefined) {
                        if (c.value == props.value) value = c;
                    }
                    else {
                        c.options.find(a => {
                            if (props.value == a.value) value = a;
                        })
                    }
                })
            }
        }
        setVal(value);
    }

    return (
        <>
            <Select
                key={props.key}
                className={isValid ? `select-${props.controlKey}` : `error-show p-0 select-${props.controlKey}`}
                closeMenuOnSelect={true}
                onChange={(changedVal) => {
                    debugger;
                    if(!props.isMulti){
                        // skip onChange event if same option is selected
                        if(changedVal?.value === val?.value) return;
                    }
                    let _selectedValue = props.isMulti ? (changedVal?.length === 0) ? [] : changedVal.map((c) => c.value) : changedVal?.value;
                    if ((_selectedValue && Array.isArray(_selectedValue) && _selectedValue.length > 0) || changedVal?.value?.length > 0) {
                        setDummyValue("selected");
                        setVal(_selectedValue);
                        props.onChange(_selectedValue);
                        setValue();
                        setIsValid(true);
                    }
                    else {
                        if (changedVal.value?.toString()) {
                            setIsValid(true);
                            setDummyValue("selected");
                            setVal(_selectedValue);
                            setValue();
                            props.onChange(_selectedValue);
                        }
                        else {
                            setDummyValue("");
                            setIsValid(false);
                            setVal(_selectedValue);
                            setValue();
                            props.onChange(_selectedValue);
                        }

                    }
                }}
                onKeyDown={(event) => {
                    if (event.key === "Enter" && event.target?.value) {
                        let value = null;
                        if (props.isMulti && (props.options.filter(a => a?.key).length == 0)) {
                            value = [props.options.map(a => [...a.options])].flat([2]).filter(c => c.label?.toString().toLowerCase()?.includes(event?.target?.value))
                        }
                        else {
                            if (props.isMulti)
                                value = props.options.filter((c) => c.label?.toString()?.toLowerCase()?.includes(event?.target?.value));
                            else {
                                props.options.filter(c => {
                                    if (c?.options == undefined) {
                                        if (c.label?.toString()?.toLowerCase()?.includes(event?.target?.value)) value = c;
                                    }
                                    else {
                                        c.options.find(a => {
                                            if (a.label?.toString()?.toLowerCase()?.includes(event?.target?.value)) value = a;
                                        })
                                    }
                                })
                            }
                        }
                        if (props.isMulti && !value.length) {
                            event.preventDefault();
                        }
                        else if (!value) {
                            event.preventDefault();
                        }
                        // value = props.options.find(v=>v.value?.toString().toLowerCase().includes(event?.target?.value))
                        // event.preventDefault();
                    }
                }}
                options={props.options}
                isMulti={props.isMulti}
                components={animatedComponents}
                required={props.required}
                isDisabled={props.disabled}
                value={val}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        ...props.themeColors,
                        primary: props.primaryColor || '#67643b',
                    },
                })}
            />
            {props.required && <input tabIndex={-1} type={"text"} style={{ height: "0px", width: "0px", position: 'absolute', opacity: "0" }} id={props.controlKey} required value={dummyValue} onInvalid={(e) => { setIsValid(false); }} />}

            {/* This input is just to check if value is selected for dropdown */}
            {props.isMandate && <input tabIndex={-1} type={"text"} style={{ height: "0px", width: "0px", position: 'absolute', opacity: "0" }} id={props.controlKey} value={dummyValue}/>}
        </>
    );
}

export default Dropdown;
