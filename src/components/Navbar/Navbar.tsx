// import { useNavigate } from "react-router-dom";
// import { FiSearch } from "react-icons/fi";
// import { Link } from "react-scroll";
// import { useState } from "react";

// const navItems = [
//     { name: "Home", id: "home" },
//     { name: "Courses", id: "courses" },
//     { name: "Free Resources", id: "freeResources" },
//     { name: "Blog", id: "blog" },
//     { name: "About", id: "contact" },
//     { name: "Contact", id: "contact" },
// ];

// const Navbar = () => {
//     const [search,setSearch] = useState("")

//     const navigate = useNavigate();
//     return (
//         <header className="sticky top-0 z-50 bg-white shadow-sm">
//             <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">


//                 <div className="text-2xl font-bold text-violet-700">
//                     TDL with Om
//                 </div>


//                 <ul className="flex items-center gap-6 ml-48">
//                     {navItems.map((item) => (
//                         <li
//                             key={item.name}
//                             className="text-bold cursor-pointer text-sm font-medium text-gray-700 transition hover:text-violet-700"
//                         >
//                             <Link to={item.id}
//                                 duration={500}
//                                 offset={-80}
//                                 className="cursor-pointer hover:text-violet-600 transition"
//                                 activeClass="text-violet-700 font-semibold" >
//                                 {item.name}

//                             </Link>

//                         </li>
//                     ))}
//                 </ul>

//                 <div className="flex items-center gap-4">

//                     <div className="flex items-center rounded-full border px-4 py-2">
//                         <FiSearch className="mr-2 text-gray-500" />
//                         <input
//                             type="text"
//                             name="search"
//                             value={search}
//                             placeholder="Search courses..."
//                             onChange={(e)=>setSearch(e.target.value)}
//                             className="outline-none"
//                         />
//                     </div>

//                     <div className="flex items-center gap-3">
                                                               
//                         <button onClick={()=>navigate("/login")}
//                          className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100 shadow hover:animation cursor-pointer">
//                             Login
//                         </button>
                    
//                         <button onClick={()=>navigate("/signup")} 
//                         className="rounded-lg bg-violet-700 px-4 py-2 text-sm font-medium text-white hover:bg-violet-800 cursor-pointer">
//                             Sign Up
//                         </button>
//                     </div>
//                 </div>

//             </div>
//         </header>
//     );
// };

// export default Navbar;




import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-scroll";

import logo from "../../assets/logo.jpg"
import { useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "contact" },
  { name: "TDLs", id: "courses" },
  { name: "Testimonial", id: "testimonial" },
  { name: "Blog", id: "blog" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 object-contain rounded-full"
          />

          <h1 className="text-xl font-bold text-sky-500">
            TDL WITH OM
          </h1>
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                duration={500}
                offset={-80}
                activeClass="active-nav"
                className="cursor-pointer text-[#3F4346] text-m font-medium hover:text-sky-500 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart & Login */}
        <div className="flex items-center gap-6">

          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-3xl text-blue-600" />

            {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              1
            </span> */}
          </div>

          <button onClick={()=>navigate("/login")} className="text-lg font-medium text-[#3F4346] hover:text-sky-500 cursor-pointer">
            Login
          </button>
           <button onClick={()=>navigate("/signup")} className="text-lg font-medium text-[#3F4346] hover:text-sky-500 cursor-pointer">
            SignUp
          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;