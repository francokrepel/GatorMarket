import { Link } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Signup() {


    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const { name, username, email, password } = data;
        try {
            const res = await axios.post("/api/auth/register", {
                name, username, email, password
            })
            setError("")
            setData({});
            navigate("/login")

        } catch (err) {
            setError(err.response.data.message)
            console.log(err)
        } finally {
            setIsLoading(false);
        }
    }

    return (
            <div className="flex flex-col justify-center mx-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
                        Create a new account
                    </h2>
                </div>
                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-2" onSubmit={handleSignup}>
                        <div className="flex-1 flex-col">
                            <div className="">
                                <input
                                    placeholder="Name"
                                    onChange={(e) => setData({ ...data, name: e.target.value })}
                                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <input
                                    placeholder="Username"
                                    onChange={(e) => setData({ ...data, username: e.target.value })}
                                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <input
                                    placeholder="Email"
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <div className="text-sm">
                                </div>
                            </div>
                            <div className="">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 flex flex-col">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="mb-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Up
                            </button>
                            {error && <span className="pb-2 text-center m-2 px-2 rounded-md  text-red-500">{error}</span>}
                            <p className="pt-2 border-2 border-transparent border-t-white/20 text-center text-sm text-white/80">
                                Already have an account?{' '}
                                <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
    )
}