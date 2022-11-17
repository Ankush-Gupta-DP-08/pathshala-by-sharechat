import React from 'react'
function Landing() {
    return (
        <div className='p-8'>
            
            <div className='w-full rounded-xl flex bg-gradient-to-br from-blue-500 to-cyan-500' style={{height: "50vh"}}>
                <h1 className='font-bold text-xl p-4'>Pathshala By ShareChat.</h1>
            </div>
            <img className="w-5/12 h-full absolute top-0 right-0" src="/educator.png" alt="Educator logo"/>
        </div>
    )
}

export default Landing
