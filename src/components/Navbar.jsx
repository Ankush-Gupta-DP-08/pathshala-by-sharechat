import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Navbar() {
   
    return (<div className='w-full drop-shadow-xl'>
        <div className='w-full flex'>
            <div className='w-1/5 h-[8px] bg-[#DC5F00]'></div>
            <div className='w-1/5 h-[8px] bg-[#5CB8E4]'></div>
            <div className='w-1/5 h-[8px] bg-[#5C2E7E]'></div>
            <div className='w-1/5 h-[8px] bg-[#FFC23C]'></div>
            <div className='w-1/5 h-[8px] bg-[#F73D93]'></div>
        </div>
        <div className='flex items-center p-4 justify-between'>
            <img src={logo} className='w-1/4' alt='Logo'></img>
            
            <div className='flex w-1/3 space-x-8 mr-10 justify-end z-100'>
                <Link to='/' className='text-[#0D4C92] font-semibold text-md md:text-xl'>Home</Link> 
                <Link to='/videoLogs' className='text-[#0D4C92] font-semibold text-md md:text-xl'>Videos</Link> 
                <a href='https://sharechat.com/blogs' className='text-[#0D4C92] font-semibold text-md md:text-xl'>Blogs</a>
            </div>
        </div>
    </div>
        
    )
}

export default Navbar
