import React, { useEffect, useState } from 'react'
import Content from '../components/Content';
import Option from '../components/Option'
import './videoLogs.css'
function VideoLogs() {
    // const [titles, setTitles] = useState([
    //     "Engineering",
    //     "Artificial Intelligence",
    //     "Product",
    //     "Design",
    //     "Content & Creators",
    //     "Life at ShareChat",
    //     "Corporate"
    // ])
    const titles = [
        "Engineering",
        "Artificial Intelligence",
        "Product",
        "Design",
        "Content & Creators",
        "Life at ShareChat",
        "Corporate"
    ]
    let displayAllTitles, displayContent;
    const [optionSelected, setSelectedoption] = useState('Engineering');
    const [mainContent, setMainContent] = useState([
        {
            videoTitle: `videoTitle-1`,
            author: `author-1`,
            team: "Engineering"
        },
        {
            videoTitle: `videoTitle-2`,
            author: `author-2`,
            team: "Engineering"
        },
        {
            videoTitle: `videoTitle-3`,
            author: `author-3`,
            team: 'Artificial Intelligence'
        },
        {
            videoTitle: `videoTitle-4`,
            author: `author-4`,
            team: "Design"
        }
    ]);

    const [content, setContent] = useState([]);

    useEffect(() => {
        setContent(mainContent.filter(mc => {
            return mc.team === optionSelected;
        }))
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
