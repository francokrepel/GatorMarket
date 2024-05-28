import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"


export default function Chat() {

    return (
        <div className="flex h-[620px] md:h-screen p-2 ">
            <div className="relative w-full h-full rounded-2xl bg-gray-100 p-2">
                <div className="h-full flex pl-[60px] items-center justify-center">
                    <div className="main-body container m-3 h-full flex flex-col">
                        <div className="relative h-full main flex-1 flex flex-col">
                            <div className="flex-1 flex h-full">
                                <div className="sidebar hidden lg:flex w-1/3 flex-2 flex-col mr-6">
                                    <div className="search flex-2 pb-6 px-2">
                                        <input type="text" className="outline-none py-2 block w-full bg-transparent border-b-2 border-gray-200" placeholder="Search" />
                                    </div>
                                    <div className="flex-1 h-full overflow-auto px-2">
                                        <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                                            <div className="flex-2">
                                                <div className="w-12 h-12 relative">
                                                    <img className="w-12 h-12 rounded-full mx-auto" src="../resources/profile-image.png" alt="chat-user" />
                                                    <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                                                </div>
                                            </div>
                                            <div className="flex-1 px-2">
                                                <div className="truncate w-32"><span className="text-gray-800">Ryann Remo</span></div>
                                                <div><small className="text-gray-600">Yea, Sure!</small></div>
                                            </div>
                                            <div className="flex-2 text-right">
                                                <div><small className="text-gray-500">15 April</small></div>
                                                <div>
                                                    <small className="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                                                        23
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-area h-full flex-1 flex flex-col">
                                    <div className="flex-3">
                                        <h2 className="text-xl py-1 mb-8 border-b-2 border-gray-200"><b>Mercedes Yemelyan</b></h2>
                                    </div>
                                    <div className="messages h-full flex-1 overflow-y-scroll">
                                        <div className="message mb-4 flex">
                                            <div className="flex-2">
                                                <div className="w-12 h-12 relative">
                                                    <img className="w-12 h-12 rounded-full mx-auto" src="../resources/profile-image.png" alt="chat-user" />
                                                    <span className="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                                                </div>
                                            </div>
                                            <div className="flex-1 px-2">
                                                <div className="inline-block bg-gray-300 rounded-2xl p-2 px-6 text-gray-700">
                                                    <span>Hey there. We would like to invite you over to our office for a visit. How about it?</span>
                                                </div>
                                                <div className="pl-4"><small className="text-gray-500">15 April</small></div>
                                            </div>
                                        </div>
                                        <div className="message me mb-4 flex text-right">
                                            <div className="flex-1 px-2">
                                                <div className="inline-block bg-gradient-to-r from-[rgb(250,70,22)] to-[rgb(255,133,31)] rounded-2xl p-2 px-6 text-white">
                                                    <span>It's like a dream come true</span>
                                                </div>
                                                <div className="pr-4"><small className="text-gray-500">15 April</small></div>
                                            </div>
                                        </div>
                                        <div className="message me mb-4 flex text-right">
                                            <div className="flex-1 px-2">
                                                <div className="inline-block bg-gradient-to-r from-[rgb(250,70,22)] to-[rgb(255,133,31)] rounded-2xl p-2 px-6 text-white">
                                                    <span>It's like a dream come true</span>
                                                </div>
                                                <div className="pr-4"><small className="text-gray-500">15 April</small></div>
                                            </div>
                                        </div>
                                        <div className="message me mb-4 flex text-right">
                                            <div className="flex-1 px-2">
                                                <div className="inline-block bg-gradient-to-r from-[rgb(250,70,22)] to-[rgb(255,133,31)] rounded-2xl p-2 px-6 text-white">
                                                    <span>It's like a dream come true</span>
                                                </div>
                                                <div className="pr-4"><small className="text-gray-500">15 April</small></div>
                                            </div>
                                        </div>
                                        <div className="message me mb-4 flex text-right">
                                            <div className="flex-1 px-2">
                                                <div className="inline-block bg-gradient-to-r from-[rgb(250,70,22)] to-[rgb(255,133,31)] rounded-2xl p-2 px-6 text-white">
                                                    <span>It's like a dream come true</span>
                                                </div>
                                                <div className="pr-4"><small className="text-gray-500">15 April</small></div>
                                            </div>
                                        </div>
                                        <div className="message me mb-4 flex text-right">
                                            <div className="flex-1 px-2">
                                                <div className="inline-block bg-gradient-to-r from-[rgb(250,70,22)] to-[rgb(255,133,31)] rounded-2xl p-2 px-6 text-white">
                                                    <span>It's like a dream come true</span>
                                                </div>
                                                <div className="pr-4"><small className="text-gray-500">15 April</small></div>
                                            </div>
                                        </div>
                                        <div className="message me mb-4 flex text-right">
                                            <div className="flex-1 px-2">
                                                <div className="inline-block bg-gradient-to-r from-[rgb(250,70,22)] to-[rgb(255,133,31)] rounded-2xl p-2 px-6 text-white">
                                                    <span>It's like a dream come true</span>
                                                </div>
                                                <div className="pr-4"><small className="text-gray-500">15 April</small></div>
                                            </div>
                                        </div>
                                        <div className="message me mb-4 flex text-right">
                                            <div className="flex-1 px-2">
                                                <div className="inline-block bg-gradient-to-r from-[rgb(250,70,22)] to-[rgb(255,133,31)] rounded-2xl p-2 px-6 text-white">
                                                    <span>It's like a dream come true</span>
                                                </div>
                                                <div className="pr-4"><small className="text-gray-500">15 April</small></div>
                                            </div>
                                        </div>
                                        <div className="message me mb-4 flex text-right">
                                            <div className="flex-1 px-2">
                                                <div className="inline-block bg-gradient-to-r from-[rgb(250,70,22)] to-[rgb(255,133,31)] rounded-2xl p-2 px-6 text-white">
                                                    <span>It's like a dream come true</span>
                                                </div>
                                                <div className="pr-4"><small className="text-gray-500">15 April</small></div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex-2 pt-4 pb-5 sticky bottom-0 bg-gray-100">
                                        <div className="write bg-white shadow flex rounded-lg">
                                            <div className="relative flex-1 ">
                                                <div className="absolute left-0 top-0 h-full w-full flex items-center">
                                                    <div className="flex-1 overflow-x-clip  ">
                                                        <h1 className="ml-3 w-[140px] h-[20px] text-gray-400">Type a message...</h1>
                                                    </div>
                                                </div>
                                                <textarea name="message" className="w-full block outline-none py-4 px-4 bg-transparent sm:text-sm" rows="1" autofocus></textarea>
                                            </div>
                                            <div className="flex-2 w-32 p-2 flex content-center items-center">
                                                <div className="flex-1 text-center">
                                                    <span className="text-gray-400 hover:text-gray-800">
                                                        <span className="inline-block align-text-bottom">
                                                            <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="flex-1">
                                                    <button className="bg-blue-400 w-10 h-10 rounded-full inline-block">
                                                        <span className="inline-block align-text-bottom">
                                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-4 h-4 text-white"><path d="M5 13l4 4L19 7"></path></svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col absolute w-[70px] h-full top-0 left-0  overflow-x-clip rounded-xl md:hidden p-2 pt-4 bg-white">
                    <div className="flex-1 no-scrollbar overflow-y-scroll">
                        <div className="h-[70px] overflow-y-clip overflow-x-hidden px-2">
                            <div className="entry cursor-pointer bg-white mb-2  flex ">
                                <div className="flex-2">
                                    <div className="w-12 h-12 relative">
                                        <img className="w-12 h-12 rounded-full mx-auto" src="../resources/profile-image.png" alt="chat-user" />
                                        <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                                    </div>
                                </div>
                                <div className="flex-1 px-2">
                                    <div className="truncate w-32"><span className="text-gray-800">Ryann Remo</span></div>
                                    <div><small className="text-gray-600">Yea, Sure!</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[70px] overflow-y-clip overflow-x-hidden px-2">
                            <div className="entry cursor-pointer bg-white mb-2  flex ">
                                <div className="flex-2">
                                    <div className="w-12 h-12 relative">
                                        <img className="w-12 h-12 rounded-full mx-auto" src="../resources/profile-image.png" alt="chat-user" />
                                        <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                                    </div>
                                </div>
                                <div className="flex-1 px-2">
                                    <div className="truncate w-32"><span className="text-gray-800">Ryann Remo</span></div>
                                    <div><small className="text-gray-600">Yea, Sure!</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[70px] overflow-y-clip overflow-x-hidden px-2">
                            <div className="entry cursor-pointer bg-white mb-2  flex ">
                                <div className="flex-2">
                                    <div className="w-12 h-12 relative">
                                        <img className="w-12 h-12 rounded-full mx-auto" src="../resources/profile-image.png" alt="chat-user" />
                                        <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                                    </div>
                                </div>
                                <div className="flex-1 px-2">
                                    <div className="truncate w-32"><span className="text-gray-800">Ryann Remo</span></div>
                                    <div><small className="text-gray-600">Yea, Sure!</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[70px] overflow-y-clip overflow-x-hidden px-2">
                            <div className="entry cursor-pointer bg-white mb-2  flex ">
                                <div className="flex-2">
                                    <div className="w-12 h-12 relative">
                                        <img className="w-12 h-12 rounded-full mx-auto" src="../resources/profile-image.png" alt="chat-user" />
                                        <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                                    </div>
                                </div>
                                <div className="flex-1 px-2">
                                    <div className="truncate w-32"><span className="text-gray-800">Ryann Remo</span></div>
                                    <div><small className="text-gray-600">Yea, Sure!</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[70px] overflow-y-clip overflow-x-hidden px-2">
                            <div className="entry cursor-pointer bg-white mb-2  flex ">
                                <div className="flex-2">
                                    <div className="w-12 h-12 relative">
                                        <img className="w-12 h-12 rounded-full mx-auto" src="../resources/profile-image.png" alt="chat-user" />
                                        <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                                    </div>
                                </div>
                                <div className="flex-1 px-2">
                                    <div className="truncate w-32"><span className="text-gray-800">Ryann Remo</span></div>
                                    <div><small className="text-gray-600">Yea, Sure!</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[70px] overflow-y-clip overflow-x-hidden px-2">
                            <div className="entry cursor-pointer bg-white mb-2  flex ">
                                <div className="flex-2">
                                    <div className="w-12 h-12 relative">
                                        <img className="w-12 h-12 rounded-full mx-auto" src="../resources/profile-image.png" alt="chat-user" />
                                        <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                                    </div>
                                </div>
                                <div className="flex-1 px-2">
                                    <div className="truncate w-32"><span className="text-gray-800">Ryann Remo</span></div>
                                    <div><small className="text-gray-600">Yea, Sure!</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[70px] overflow-y-clip overflow-x-hidden px-2">
                            <div className="entry cursor-pointer bg-white mb-2  flex ">
                                <div className="flex-2">
                                    <div className="w-12 h-12 relative">
                                        <img className="w-12 h-12 rounded-full mx-auto" src="../resources/profile-image.png" alt="chat-user" />
                                        <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                                    </div>
                                </div>
                                <div className="flex-1 px-2">
                                    <div className="truncate w-32"><span className="text-gray-800">Ryann Remo</span></div>
                                    <div><small className="text-gray-600">Yea, Sure!</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[70px] overflow-y-clip overflow-x-hidden px-2">
                            <div className="entry cursor-pointer bg-white mb-2  flex ">
                                <div className="flex-2">
                                    <div className="w-12 h-12 relative">
                                        <img className="w-12 h-12 rounded-full mx-auto" src="../resources/profile-image.png" alt="chat-user" />
                                        <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                                    </div>
                                </div>
                                <div className="flex-1 px-2">
                                    <div className="truncate w-32"><span className="text-gray-800">Ryann Remo</span></div>
                                    <div><small className="text-gray-600">Yea, Sure!</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[70px] overflow-y-clip overflow-x-hidden px-2">
                            <div className="entry cursor-pointer bg-white mb-2  flex ">
                                <div className="flex-2">
                                    <div className="w-12 h-12 relative">
                                        <img className="w-12 h-12 rounded-full mx-auto" src="../resources/profile-image.png" alt="chat-user" />
                                        <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                                    </div>
                                </div>
                                <div className="flex-1 px-2">
                                    <div className="truncate w-32"><span className="text-gray-800">Ryann Remo</span></div>
                                    <div><small className="text-gray-600">Yea, Sure!</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[70px] overflow-y-clip overflow-x-hidden px-2">
                            <div className="entry cursor-pointer bg-white mb-2  flex ">
                                <div className="flex-2">
                                    <div className="w-12 h-12 relative">
                                        <img className="w-12 h-12 rounded-full mx-auto" src="../resources/profile-image.png" alt="chat-user" />
                                        <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                                    </div>
                                </div>
                                <div className="flex-1 px-2">
                                    <div className="truncate w-32"><span className="text-gray-800">Ryann Remo</span></div>
                                    <div><small className="text-gray-600">Yea, Sure!</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[70px] overflow-y-clip overflow-x-hidden px-2">
                            <div className="entry cursor-pointer bg-white mb-2  flex ">
                                <div className="flex-2">
                                    <div className="w-12 h-12 relative">
                                        <img className="w-12 h-12 rounded-full mx-auto" src="../resources/profile-image.png" alt="chat-user" />
                                        <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                                    </div>
                                </div>
                                <div className="flex-1 px-2">
                                    <div className="truncate w-32"><span className="text-gray-800">Ryann Remo</span></div>
                                    <div><small className="text-gray-600">Yea, Sure!</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[70px] overflow-y-clip overflow-x-hidden px-2">
                            <div className="entry cursor-pointer bg-white mb-2  flex ">
                                <div className="flex-2">
                                    <div className="w-12 h-12 relative">
                                        <img className="w-12 h-12 rounded-full mx-auto" src="../resources/profile-image.png" alt="chat-user" />
                                        <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                                    </div>
                                </div>
                                <div className="flex-1 px-2">
                                    <div className="truncate w-32"><span className="text-gray-800">Ryann Remo</span></div>
                                    <div><small className="text-gray-600">Yea, Sure!</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[70px] overflow-y-clip overflow-x-hidden px-2">
                            <div className="entry cursor-pointer bg-white mb-2  flex ">
                                <div className="flex-2">
                                    <div className="w-12 h-12 relative">
                                        <img className="w-12 h-12 rounded-full mx-auto" src="../resources/profile-image.png" alt="chat-user" />
                                        <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                                    </div>
                                </div>
                                <div className="flex-1 px-2">
                                    <div className="truncate w-32"><span className="text-gray-800">Ryann Remo</span></div>
                                    <div><small className="text-gray-600">Yea, Sure!</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[70px] overflow-y-clip overflow-x-hidden px-2">
                            <div className="entry cursor-pointer bg-white mb-2  flex ">
                                <div className="flex-2">
                                    <div className="w-12 h-12 relative">
                                        <img className="w-12 h-12 rounded-full mx-auto" src="../resources/profile-image.png" alt="chat-user" />
                                        <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                                    </div>
                                </div>
                                <div className="flex-1 px-2">
                                    <div className="truncate w-32"><span className="text-gray-800">Ryann Remo</span></div>
                                    <div><small className="text-gray-600">Yea, Sure!</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[70px] overflow-y-clip overflow-x-hidden px-2">
                            <div className="entry cursor-pointer bg-white mb-2  flex ">
                                <div className="flex-2">
                                    <div className="w-12 h-12 relative">
                                        <img className="w-12 h-12 rounded-full mx-auto" src="../resources/profile-image.png" alt="chat-user" />
                                        <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                                    </div>
                                </div>
                                <div className="flex-1 px-2">
                                    <div className="truncate w-32"><span className="text-gray-800">Ryann Remo</span></div>
                                    <div><small className="text-gray-600">Yea, Sure!</small></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="flex-1 h-full  hidden md:block rounded-2xl bg-gray-100 ml-2">
            </div> */}
        </div >
    )
}