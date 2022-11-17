import React, { useEffect, useState } from 'react'
import Content from '../components/Content';
import Option from '../components/Option'
import './videoLogs.css'
function VideoLogs() {
    const [titles, setTitles] = useState([
        "Engineering",
        "Artificial Intelligence",
        "Product",
        "Design",
        "Content & Creators",
        "Life at ShareChat",
        "Corporate"
    ])
    let displayAllTitles, displayContent;
    const [optionSelected, setSelectedoption] = useState('Engineering');
    const [content, setContent] = useState([
        {
            videoTitle: `videoTitle-1 + ${optionSelected}`,
            author: `author-1 + ${optionSelected}`
        },
        {
            videoTitle: `videoTitle-2 + ${optionSelected}`,
            author: `author-2 + ${optionSelected}`
        },
        {
            videoTitle: `videoTitle-3 + ${optionSelected}`,
            author: `author-3 + ${optionSelected}`
        },
        {
            videoTitle: `videoTitle-4 + ${optionSelected}`,
            author: `author-4 + ${optionSelected}`
        }
    ]);
    useEffect(() => {
        setContent([
            {
                videoTitle: `videoTitle-1 + ${optionSelected}`,
                author: `author-1 + ${optionSelected}`
            },
            {
                videoTitle: `videoTitle-2 + ${optionSelected}`,
                author: `author-2 + ${optionSelected}`
            },
            {
                videoTitle: `videoTitle-3 + ${optionSelected}`,
                author: `author-3 + ${optionSelected}`
            },
            {
                videoTitle: `videoTitle-4 + ${optionSelected}`,
                author: `author-4 + ${optionSelected}`
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
                <Content videoTitle={con.videoTitle} author={con.author} />
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
