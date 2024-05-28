import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai"


export default function Search() {
    const [data, setData] = useState({
        posts: []
    })

    const [selected, setSelected] = useState(false);

    const categories = [
        { emoji: '🛏️', label: 'Beds' },
        { emoji: '🪑', label: 'Chairs' },
        { emoji: '🛋️', label: 'Sofas' },
        { emoji: '🖥️', label: 'Desks' },
        { emoji: '🔌', label: 'Electronics' },
        { emoji: '📚', label: 'Books' },
        { emoji: '🧺', label: 'Storage' },
        { emoji: '💡', label: 'Lighting' },
        { emoji: '🎨', label: 'Decor' },
        { emoji: '🍽️', label: 'Kitchenware' },
        { emoji: '☕', label: 'Coffee Makers' },
        { emoji: '🍳', label: 'Cooking Appliances' },
        { emoji: '🎵', label: 'Audio Equipment' },
        { emoji: '💻', label: 'Laptops' },
        { emoji: '🖨️', label: 'Printers' },
        { emoji: '📱', label: 'Mobile Phones' },
        { emoji: '🎮', label: 'Gaming Consoles' },
        { emoji: '🚲', label: 'Bicycles' },
        { emoji: '🏋️', label: 'Gym Equipment' },
        { emoji: '🧴', label: 'Health & Beauty Products' },
        { emoji: '🧥', label: 'Clothing' },
        { emoji: '👟', label: 'Footwear' },
        { emoji: '🕶️', label: 'Accessories' },
        { emoji: '🎒', label: 'Bags & Backpacks' },
        { emoji: '🖌️', label: 'Art Supplies' },
        { emoji: '🛠️', label: 'Tools' },
        { emoji: '🌿', label: 'Plants' },
        { emoji: '🛁', label: 'Bathroom Essentials' },
        { emoji: '🛒', label: 'Miscellaneous' }
    ];

    const handleSelected = () => {
        setSelected(!selected)
    }

    function scrollLeft() {
        const container = document.getElementById('categoryList');
        container.scrollLeft -= 700;
    }

    function scrollRight() {
        const container = document.getElementById('categoryList');
        container.scrollLeft += 700;
    }

    return (
        <div className="flex mx-3 min-h-screen" >
            {/* searh */}
            <div className={selected ? "w-[70%] overflow-scroll mr-2 space-y-3 flex flex-col rounded-2xl bg-gray-100 ease-in-out duration-300 no-scrollbar " :
                "w-[100%] overflow-scroll space-y-3 flex flex-col rounded-2xl bg-gray-100   no-scrollbar "}>
                <div className="flex pl-2 pr-2 h-16 mt-6 mx-2 space-x-2 lg:mx-6 rounded-3xl bg-white  text-gray-900 shadow-lg">
                    <input
                        className="w-full rounded-2xl text-lg my-1.5 px-2"
                        placeholder="What are you looking for?"
                    />
                    <button onClick={handleSelected} className="flex items-center space-x-1 justify-center bg-gradient-to-r from-[rgb(250,70,22)] to-[rgb(255,133,31)] px-2 my-2 w-[120px] rounded-2xl text-lg text-white/80">
                        <AiOutlineSearch className="font-bold" size={20} />
                        <div className="">Search</div>
                    </button>
                </div>
                {/* categories */}
                <div className="flex items-center">
                    <button className="px-3 text-gray-700 text-3xl" onClick={scrollLeft}>&#x2039;</button>
                    <div id="categoryList" className="no-scrollbar flex overflow-x-auto whitespace-nowrap scroll-smooth">
                        {categories.map((category) => (
                            <div key={category.label} className="category text-gray-700 mx-2 p-2 cursor-pointer">
                                <span role="img" aria-label={category.label}>{category.emoji}</span> {category.label}
                            </div>
                        ))}
                    </div>
                    <button className="px-3 text-gray-700 text-3xl" onClick={scrollRight}>&#x203A;</button>
                </div>
                {/* results */}
                <div className="mx-4 pb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
                    <button onClick={handleSelected} className="max-w-sm rounded-lg ">
                        <img className="rounded-t-lg" src="" alt="" />
                        <div className="p-2">
                            <h5 className="text-left text-2xl font-bold tracking-tight text-gray-900">Something Cool</h5>
                            <p className="text-left mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </button>

                </div>
            </div>
            {/* Card*/}
            <div className="min-h-screen flex-1 rounded-2xl bg-white/80 relative">
                {selected && (
                    <>
                        <AiOutlineClose onClick={handleSelected} size={30} className="text-gray-500 absolute top-2 right-2" />
                    </>
                )}

            </div>
        </div>
    )
}   