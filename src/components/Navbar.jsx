import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
   
    return (<div className='w-full drop-shadow-xl'>
        <div className='w-full flex'>
            <div className='w-1/5 h-[8px] bg-[#DC5F00]'></div>
            <div className='w-1/5 h-[8px] bg-[#5CB8E4]'></div>
            <div className='w-1/5 h-[8px] bg-[#5C2E7E]'></div>
            <div className='w-1/5 h-[8px] bg-[#FFC23C]'></div>
            <div className='w-1/5 h-[8px] bg-[#F73D93]'></div>
            
        </div>
        <div className='flex items-center p-4 '>
            <div className='w-2/3'></div>
            <div className='flex w-1/3 space-x-8 mr-10 justify-end'>
                <Link to='/upload' className='text-[#79B4B7] font-bold text-xl md:text-3xl'>Videos</Link> 
                <Link to='/videoPage' className='text-[#79B4B7] font-bold text-xl md:text-3xl'>Blogs</Link>
            </div>
        </div>
    </div>
        
    )
}

export default Navbar
