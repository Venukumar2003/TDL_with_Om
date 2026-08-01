import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-scroll";
import { useState } from "react";

const navItems = [
    { name: "Home", id: "home" },
    { name: "Courses", id: "courses" },
    { name: "Free Resources", id: "freeResources" },
    { name: "Blog", id: "blog" },
    { name: "About", id: "contact" },
    { name: "Contact", id: "contact" },
];

const Navbar = () => {
    const [search,setSearch] = useState("")

    const navigate = useNavigate();
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">


                <div className="text-2xl font-bold text-violet-700">
                    TDL with Om
                </div>


                <ul className="flex items-center gap-6 ml-48">
                    {navItems.map((item) => (
                        <li
                            key={item.name}
                            className="text-bold cursor-pointer text-sm font-medium text-gray-700 transition hover:text-violet-700"
                        >
                            <Link to={item.id}
                                duration={500}
                                offset={-80}
                                className="cursor-pointer hover:text-violet-600 transition"
                                activeClass="text-violet-700 font-semibold" >
                                {item.name}

                            </Link>

                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">

                    <div className="flex items-center rounded-full border px-4 py-2">
                        <FiSearch className="mr-2 text-gray-500" />
                        <input
                            type="text"
                            name="search"
                            value={search}
                            placeholder="Search courses..."
                            onChange={(e)=>setSearch(e.target.value)}
                            className="outline-none"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                                                               
                        <button onClick={()=>navigate("/login")}
                         className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100 shadow hover:animation cursor-pointer">
                            Login
                        </button>
                    
                        <button onClick={()=>navigate("/signup")} 
                        className="rounded-lg bg-violet-700 px-4 py-2 text-sm font-medium text-white hover:bg-violet-800 cursor-pointer">
                            Sign Up
                        </button>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Navbar;