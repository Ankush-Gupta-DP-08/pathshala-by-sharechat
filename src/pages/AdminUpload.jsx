import React, { useState } from 'react';
import axios from 'axios';

function AdminUpload() {
    const backent_url='http://localhost:4000';
     const [data,setData]=useState({});
    const [videos,setVideos]=useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        let formData=new FormData();
        formData.append("video",videos[0]);
        Object.keys(data).forEach(key=>{
            formData.append(key,data[key]);
        });
        axios.post(`${backent_url}/api/v1/media/create`,formData).then(success=>{
            alert('Submitted Successfully')
        }).catch(error=>{alert("Error!!")});
    }
    
    return (
        <div>
            <div className="w-2/3 m-auto text-left">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="flex flex-wrap mb-4 place-content-between">
                    <div className="mb-4 w-2/5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={(e)=>{
                            setData({...data,"name":e.target.value})
                        }}/>
                    </div>
                    <div className="mb-4 w-2/5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Team
                        </label>
                        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e)=>{setData({...data,"team":e.target.value})}}>
                            <option selected value="Engineering">Engineering</option>
                            <option value="Artificial Intelligence">Artificial Intelligence</option>
                            <option value="Product">Product</option>
                            <option value="Design">Design</option>
                            <option value="Content & Creators">Content & Creators</option>
                            <option value="Life at ShareChat">Life at ShareChat</option>
                            <option value="Corporate">Corporate</option>
                        </select>

                    </div>
                </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username" >
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" onChange={(e)=>{
                            setData({...data,"email":e.target.value})
                        }}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Topic
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Topic" onChange={(e)=>{
                            setData({...data,"topic":e.target.value})
                        }}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Title
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Title" onChange={(e)=>{
                            setData({...data,"title":e.target.value})
                        }}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Tags
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Add tags seprated by comma(,)" onChange={(e)=>{
                            setData({...data,"tags":e.target.value})
                        }}/>
                    </div>
                    <div className="mb-4 flex items-center justify-center w-full">
                        <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">MP4 or MKV</p>
                            </div>
                            <input id="dropzone-file" type="file" accept='.mp4, .mkv' className="hidden" onChange={(e)=>{
                                setVideos(e.target.files);
                            }} />
                        </label>
                    </div>
                    <div className='w-3/12 text-center shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'><input type='submit'/></div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default AdminUpload
