import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Textlyzer</div>
        <div className="hidden md:flex space-x-6">
          <Link to='/' className="text-white hover:text-gray-400">Home</Link>
          <Link to='/about' className="text-white hover:text-gray-400">About</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link to='/' className="block px-2 py-1 text-white hover:bg-gray-700">Home</Link>
          <Link to='/about' className="block px-2 py-1 text-white hover:bg-gray-700">About</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
