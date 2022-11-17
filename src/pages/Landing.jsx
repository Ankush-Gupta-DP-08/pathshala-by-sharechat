import React from 'react'
function Landing() {
    return (
        <div className='p-8'>
            
            <div className='w-full items-center rounded-xl flex bg-gradient-to-br from-blue-500 to-cyan-500' style={{height: "50vh"}}>
                <div className='w-1/2 p-4'>
                    <h1 className=''>Educating Engineers</h1>
                    <h1 className='pt-4 font-bold text-4xl'>Pathshala By ShareChat. Insider Updates on Our Latest Projects. </h1>
                    <h1 className='pt-8'>We bring you the best from the world of design, tech and latest apps with an insight of our successful projects and their stories</h1>
                    <div className='flex pt-4'>
                        <div className='bg-[#2C3333] drop-shadow-xl text-white font-bold rounded-xl py-3 px-8 m-2'>Videos</div>
                        <div className='bg-[#2C3333] drop-shadow-xl text-white font-bold rounded-xl py-3 px-8 m-2'>Blogs</div>
                    </div>
                </div>
                
                
            </div>
            <img className="w-5/12 absolute top-0 right-0" src="/educator.png" alt="Educator logo"/>
        </div>
    )
}

export default Landing
