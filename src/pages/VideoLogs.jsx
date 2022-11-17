import React, { useEffect, useState } from 'react'
import Option from '../components/Option'
import './videoLogs.css'
function VideoLogs() {
    const [titles, setTitles] = useState([
        "Engineering",
        "Artificial Intelligence",
        "Product",
        "Design",
        "Content & Creators"
    ])
    let displayAllTitles, displayContent;
    const [optionSelected, setSelectedoption] = useState('Engineering');
    const [content, setContent] = useState([
        {
            title: `title-1 + ${optionSelected}`,
            author: `author-1 + ${optionSelected}`
        },
        {
            title: `title-2 + ${optionSelected}`,
            author: `author-2 + ${optionSelected}`
        }
    ]);
    useEffect(() => {
        setContent([
            {
                title: `title-1 + ${optionSelected}`,
                author: `author-1 + ${optionSelected}`
            },
            {
                title: `title-2 + ${optionSelected}`,
                author: `author-2 + ${optionSelected}`
            }
        ])
    }, [optionSelected])
    displayAllTitles = titles.map((title, index) => {
        return (
            <Option key={index} title={title} setSelectedoption={setSelectedoption} />
        )
    })
    displayContent = content.map((con, index) => {
        return (
            <div key={index}>
                <h1>{con.title}</h1>
                <h2>{con.author}</h2>
            </div>
        )
    })
    return (
        <div>
            <div className='contianer'>{displayAllTitles}</div>
            <div>{displayContent}</div>
        </div>
    )
}

export default VideoLogs
