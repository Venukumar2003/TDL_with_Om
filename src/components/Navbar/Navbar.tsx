
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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-md border-b border-violet-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 object-contain rounded-full cursor-pointer"
          />

          <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent">
            TDL WITH OM
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                duration={500}
                offset={-90}
                activeClass="active-nav"
                className="cursor-pointer text-gray-700 text-[17px] font-semibold hover:text-violet-600 transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart & Login */}
        <div className="flex items-center gap-6">

          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-2xl text-violet-700 hover:scale-110 transition duration-300" />

          </div>

          <button onClick={() => navigate("/login")} className="px-5 py-2 rounded-xl font-semibold text-violet-700 hover:bg-violet-50 cursor-pointer transition">
            Login
          </button>
          <button onClick={() => navigate("/signup")} className="px-6 py-2 rounded-xl bg-gradient-to-r from-violet-700 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            SignUp
          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;