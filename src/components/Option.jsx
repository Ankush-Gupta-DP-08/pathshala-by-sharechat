import React from 'react'
import './option.css'
function Option({ title, setSelectedoption, optionSelected }) {
    let styleName = optionSelected === title ? "selected" : "";
    return (
        <div onClick={() => {
            setSelectedoption(title);
        }} className={`card ${styleName}`}>
            <h2>{title}</h2>
        </div>
    )
}

export default Option
