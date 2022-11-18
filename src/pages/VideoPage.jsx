import React from 'react'
import { useParams } from 'react-router-dom'
import './videoPage.css'

export default function VideoPage() {
    const { title, author } = useParams();
    return (
        <div className='video-container'>
            <h1 className='ont-medium leading-tight text-5xl mt-0 mb-2 title'>{title}</h1>
            {/* <video width="400" controls="true">
                <source src="https://www.youtube.com/watch?v=J3QGSRVmOOw" type="video/mp4" />

                Your browser does not support HTML video.
            </video> */}
            <iframe className='video'
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            <p className='ont-medium leading-tight text-5xl mt-0 mb-2 author'>By: {author}</p>
        </div>
    )
}
