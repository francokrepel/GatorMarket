import { useState } from "react";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import logo from "../assets/gator_market_logo.png"

export default function Navbar() {

    const navigate = useNavigate();

    const [nav, setNav] = useState(false);

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/auth/logout");
            navigate("/");
            localStorage.removeItem("user")
        } catch (err) {
            console.log(err);
        }
    }

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        // large screen (relative inset-0) WAS IN SIGNUP BUTTONS
        <div>
            <nav className="px-5 bg-transparent sticky z-50 top-0 flex justify-between items-center h-16 mx-auto px-">
                <Link className="h-full" to="/">
                    <img src={logo} className="h-full drop-shadow-2xl" alt="Home" />
                </Link>
                {/* <Link className="w-full font-bold text-2xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/90 to-white/50" to="/">
                    GatorMarket
                </Link> */}
                <div onClick={handleNav} className="block md:hidden text-white/80">
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
                <ul className="text-white/80 to-white/20 hidden md:flex items-center">
                    <Link className="mx-4" to="/search">Browse</Link>
                    <Link className="mx-4" to="/login">Login</Link>
                    <Link className="mx-2 bg-white/20 rounded-lg px-4 py-2" to="/signup">Signup</Link>
                </ul>
            </nav>
            {/* small screen */}
            <nav className={nav ? "z-50 fixed top-0 left-0 flex flex-col space-y-6 w-[60%] h-screen backdrop-blur-lg border-r-2 border-white/20 drop-shadow-sm  ease-in-out duration-500" : "fixed left-[-100%] ease-in-out duration-500"}>
                <ul className="pt-6 pl-4 flex flex-col space-y-6">
                    <Link onClick={handleNav} className="font-bold text-xl text-white/80  drop-shadow-5" to="/">
                        Home
                    </Link>
                    <Link onClick={handleNav} className="font-bold text-xl text-white/80  drop-shadow-5" to="/search">
                        Search
                    </Link>
                    <Link onClick={handleNav} className="font-bold text-xl text-white/80  drop-shadow-5" to="/login">
                        Login
                    </Link>
                    <Link onClick={handleNav} className="font-bold text-xl text-white/80  drop-shadow-5" to="/signup">
                        Signup
                    </Link>
                    <Link onClick={handleLogout}>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}