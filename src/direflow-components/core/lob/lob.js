import React, { useState } from 'react';

const LineOfBusiness = (props) => {
    const [lobOptions, setLOBOptions] = useState(props.options);    
    const [selectedLOB, setSelectedLOB] = useState(props.value);
    const selectLOB = (e, Lob)=> {
        e.preventDefault();
        setSelectedLOB(Lob);
        props.onChange(Lob)
    }
    return (
        <>
        <div className={props.parentClass || 'row mt-4'}>
            <div className={props.childClass ||  'col-md-12'}>
            <label htmlFor="locations" className={props.labelClass || "inputLabel textBlack pb-0"}><b>Select Line of Business</b></label>
            <ul  className={props.ulClass || 'lineBusiness d-flex flex-wrap'}>
                {
                    lobOptions?.map((lob,pos)=>
                        <li style={lob.style} key={pos} className={selectedLOB?.toUpperCase() == lob.key.toUpperCase() ? (`${props.liClass} ${lob.liClass} active`) : `${props.liClass} ${lob.liClass}`} onClick={(e)=>selectLOB(e, lob.key.toUpperCase())}>
                            <a href=''>
                                <img  src={lob.src} alt={lob.label} />
                                <br></br>
                                <span>{lob.label}</span>
                            </a>
                        </li>
                    )
                }
            </ul>
            </div>
        </div>
        </>
    );
}

export default LineOfBusiness;