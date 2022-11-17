import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css'
function Landing() {
    return (
        <div className='m-8 p-8 flexw-full items-center rounded-xl flex bg-gradient-to-br from-blue-500 to-cyan-500' style={{height: "50vh"}}>
                <div className='w-1/2 p-4'>
                    <h1 className=''>Educating Engineers</h1>
                    <h1 className='pt-4 font-bold text-4xl'>Pathshala By ShareChat. Insider Updates on Our Latest Projects. </h1>
                    <h1 className='pt-8'>We bring you the best from the world of design, tech and latest apps with an insight of our successful projects and their stories</h1>
                    <div className='flex pt-4'>
                        <Link to='/videoLogs' className='bg-[#2C3333] drop-shadow-xl text-white font-bold rounded-xl py-3 px-8 m-2'>Videos</Link>
                        <a href='https://sharechat.com/blogs' className='bg-[#2C3333] drop-shadow-xl text-white font-bold rounded-xl py-3 px-8 m-2'>Blogs</a>
                    </div>
                </div>
            <img className="photo" src="/educator.png" alt="Educator logo" />
        </div>
    )
}

export default Landing
