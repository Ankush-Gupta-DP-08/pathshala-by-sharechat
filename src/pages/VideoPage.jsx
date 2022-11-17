import React from 'react'
import './videoPage.css'

export default function VideoPage({ title, author, videoLink }) {

    return (
        <div className='video-container'>
            <h1 className='title-1'>{title}</h1>
            {/* <video width="400" controls="true">
                <source src="https://www.youtube.com/watch?v=J3QGSRVmOOw" type="video/mp4" />

                Your browser does not support HTML video.
            </video> */}
            <iframe className='video'
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            <p className='author-1'>By: {author}</p>
        </div>
    )
}
