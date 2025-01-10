import { Link } from "react-router-dom";

const Navbar = () => {
  const navlink = (
    <ul className="flex flex-col lg:flex-row text-white lg:space-x-6 space-y-2 lg:space-y-0">
      <Link to="/">
        <li className="px-4 py-2 text-white font-bold hover:bg-blue-500 hover:text-white rounded transition-all duration-300">
          Home
        </li>
      </Link>
      <Link to="/about">
        <li className="px-4 py-2 text-white font-bold hover:bg-blue-500 hover:text-white rounded transition-all duration-300">
          About Us
        </li>
      </Link>
      <Link to="/">
        <li className="px-4 py-2 text-white font-bold hover:bg-blue-500 hover:text-white rounded transition-all duration-300">
          Works
        </li>
      </Link>
    </ul>
  );

  return (
    // bg-gradient-to-r from-gray-800 to-blue-800
    <div className="navbar bg-black  shadow-md w-full px-14">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 bg-white shadow rounded-box z-[1] w-52"
          >
            {navlink}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold text-blue-600">
        <img className="w-32" src="https://i.ibb.co.com/3M82KKy/logo-zoronoa.png" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlink}</ul>
      </div>
      <div className="navbar-end">
        <a className=" text-white border-none">
          MENU
        </a>
      </div>
    </div>
  );
};

export default Navbar;
