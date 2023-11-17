import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import MobileCategoriesDropdown from "./MobileCategoriesDropdown";

function MobileNav({ isMenuOpen, closeMenu }) {
  const [DropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!DropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleLinkClick = () => {
    closeDropdown();
    closeMenu(); // Close the entire mobile menu
  };

  return (
    <div className={`pl-10 flex flex-col space-y-5 pt-5 text-2xl`}>
      <Link href="/" onClick={handleLinkClick}>
        <div className="nav-link text-2xl">Home</div>
      </Link>

      <div className="group" onClick={toggleDropdown}>
        <div className="nav-link text-2xl flex justify-between items-center pt-3">
          <div>Categories</div>
          <div className="transition-all duration-300 ease-in-out">
            <MdOutlineKeyboardArrowDown
              size={25}
              className={DropdownOpen ? "rotate-180" : ""}
            />
          </div>
        </div>
        {DropdownOpen && (
          <div className="group">
            <MobileCategoriesDropdown />
          </div>
        )}
      </div>

      <Link href="/packages" onClick={handleLinkClick}>
        <div className="nav-link text-2xl">Packages</div>
      </Link>
      <Link href="/blog" onClick={handleLinkClick}>
        <div className="nav-link text-2xl">Blog</div>
      </Link>
      <Link href="/contact" onClick={handleLinkClick}>
        <div className="nav-link text-2xl">Contact</div>
      </Link>

      <div className="flex items-center">
        <Link href="/properties" onClick={handleLinkClick}>
          <div className="nav-link text-2xl text-primary pr-4">Explore properties</div>
        </Link>
        <Link href="/search" onClick={handleLinkClick}>
          <div className="nav-link text-2xl bg-primary hover:bg-primarylight rounded-full w-12 h-12 p-3">
            <FiSearch size={25} className="flex w-full text-white h-full" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MobileNav;
