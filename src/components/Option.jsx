import React from 'react'
import './option.css'
function Option({ title, setSelectedoption }) {
    return (
        <div onClick={() => {
            console.log('You clicked: ', title);
            setSelectedoption(title);
        }} className='card'>
            <h2>{title}</h2>
        </div>
    )
}

export default Option
