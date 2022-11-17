import React from 'react'
import './content.css'

function Content({ videoTitle, author }) {
    const handleClick = () => {
        console.log("Take me to ", videoTitle, author);
    }
    return (
        <div className='row' onClick={handleClick}>
            <div className='thumbnail'>
                <img src={'https://assets-global.website-files.com/616e938268c8f0a92cb2b540/626b2105eca8a62c25bbd9f0_youtube%20thumbnail%20size%20and%20best%20practices%20by%20veed%20studio.jpg'} />
            </div>
            <div>
                <h1 className='title'>{videoTitle}</h1>
                <h3 className='author'>{author}</h3>
            </div>
        </div>
    )
}

export default Content