import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import pp from "../assets/pp.jpg"
import lamp1 from "../assets/lamp2.png"
import lamp2 from "../assets/lamp3.png"


export default function Profile() {

    const [data, setData] = useState({
        name: "",
        username: "",
        email: "",
    })

    // items-center justify-center
    return (    
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-2 p-2">
            {/* PROFILE TAB */}
            <div className="relative md:col-span-1 md:row-span-1 flex flex-col items-center justify-center p-5 space-y-3 bg-white/80 shadow-sm rounded-2xl">
                <h2 className="w-full text-left text-2xl font-bold leading-9 tracking-tight text-gray-900/70">
                    Your Profile:
                </h2>
                <div className="flex justify-center items-center h-40 w-40 rounded-full border-4 border-white shadow-lg">
                    <img src={pp} alt="Profile" className="h-full w-full object-cover rounded-full" />
                </div>
                <div className="absolute rounded-full h-40 w-40 top-14">
                    <div className="absolute top-3 right-3 rounded-lg h-6 w-6 bg-white/80">
                        <FiEdit size={20} className="text-gray-900 ml-[3px] mt-[1px]" />
                    </div>
                </div>
                {/* other info */}
                <div className="flex-1 w-full">
                    <form className="space-y-3 lg:mx-5">
                        <div className="">
                            <div className="">
                                <input
                                    placeholder={JSON.parse(localStorage.getItem("user")).name}
                                    // onChange={(e) => setData({ ...data, name: e.target.value })}
                                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <input
                                    placeholder={JSON.parse(localStorage.getItem("user")).username}
                                    disabled={true}
                                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm"
                                />
                                <div className="absolute text-xs text-gray-900/30 -top-2 left-0">username</div>
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <input
                                    placeholder={JSON.parse(localStorage.getItem("user")).email}
                                    disabled={true}
                                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm"
                                />
                                <div className="absolute text-xs text-gray-900/30 -top-2 left-0">email</div>
                            </div>

                        </div>
                        <h2 className="font-bold text-gray-700/70">Edit Password:</h2>
                        <div>
                            <div className="">
                                <input
                                    type="password"
                                    placeholder="Old Password"
                                    // onChange={(e) => setData({ ...data, password: e.target.value })}
                                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm "
                                />
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <input
                                    type="password"
                                    placeholder="New Password"
                                    // onChange={(e) => setData({ ...data, password: e.target.value })}
                                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm "
                                />
                            </div>
                        </div>

                        <div className="space-y-2 flex flex-col">
                            <button
                                type="submit"
                                // disabled={isLoading}
                                className="mb-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Save
                            </button>
                            {/* {error && <span className="pb-2 text-center m-2 px-2 rounded-md  text-red-500">{error}</span>} */}
                        </div>
                    </form>
                </div>
            </div>
            {/* SAVED/LIST TAB */}
            <div className="md:col-span-2 md:row-span-1 relative flex flex-col h-[580px] items-center justify-center p-5 space-y-3 bg-white/80 shadow-sm rounded-2xl">
                <h2 className="w-full text-left text-2xl font-bold leading-9 tracking-tight text-gray-900/70">
                    Your List:
                </h2>
                <div className="flex-1 w-full overflow-y-scroll">
                    {/* cards */}
                    <div className="flex">
                        <img className="h-24 w-24 md:h-40 md:w-40 rounded-xl" src={lamp1} alt="" />
                        <div className="ml-2">
                            <h5 className="text-left text-xl md:text-2xl font-bold tracking-tight text-gray-900">Something Cool</h5>
                            <p className="text-left mb-3 font-normal text-gray-700">Availible to Deliver</p>
                            <p>$34</p>
                        </div>
                    </div>
                </div>
            </div >
            {/* YOUR POSTS */}
            < div className='md:col-span-3 md:row-span-1 relative flex flex-col items-center justify-center p-3 space-y-3 bg-white/80 shadow-sm rounded-2xl' >
                <h2 className="w-full text-left text-2xl font-bold leading-9 tracking-tight text-gray-900/70">
                    Your Posts:
                </h2>
            </div >
        </div >

    )
}