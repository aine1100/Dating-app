import { useState } from 'react';
import { FaBars, FaHeart, FaSearch, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="shadow-md bg-white w-[100%] h-16 flex items-center md:justify-center justify-between gap-24 p-4">
      <h1 className="font-bold text-2xl">soul meet</h1>
      <div className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 p-6 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:transform-none md:static md:flex md:flex-row md:gap-8 md:p-0 md:bg-transparent`}>
        <button className="absolute top-4 right-4 text-2xl md:hidden" onClick={toggleMenu}>
          <FaTimes />
        </button>
        <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-16">
          <li className=" hover:text-[#B61561]">About us</li>
          <li className=" hover:text-[#B61561]">Community</li>
          <li className=" hover:text-[#B61561]">Membership</li>
          <li className=" hover:text-[#B61561]">Blog</li>
          <li className=" hover:text-[#B61561]">Contact us</li>
        </ul>
        <div className="flex gap-10">
          <FaSearch className="text-xl text-[#B61561]" />
          <FaHeart className="text-xl text-[#B61561]" />
        </div>
        <button className="h-10 w-24 text-white rounded-md bg-[#B61561] hover:bg-[#a31458]">Login</button>
      </div>
      <FaBars className=" cursor-pointer md:hidden" onClick={toggleMenu} />
    </div>
  );
};

export default Navbar;
