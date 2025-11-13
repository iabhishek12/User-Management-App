
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="min-h-[80px] w-full bg-blue-500 text-white p-4 sticky top-0 z-50 flex justify-center items-center">
      <div className="flex justify-between items-center w-[95%] ">
        <h1 className="text-lg md:text-2xl font-bold">USER MANAGEMENT APP</h1>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/add" className="hover:bg-black/80 p-3 rounded bg-black transition-colors">
            Add User
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 mt-4' : 'max-h-0'}`}>
        <div className="flex flex-col space-y-3">
          <Link 
            to="/" 
            className="hover:bg-blue-600 p-2 rounded transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/add" 
            className="hover:bg-black/80 p-3 rounded bg-black text-center transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Add User
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;