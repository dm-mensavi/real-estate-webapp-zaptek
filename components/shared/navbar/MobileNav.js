import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import CategoriesDropdown from './CategoriesDropdown';
import Underline from './Underline';

function MobileNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 bg-white p-4 flex flex-col items-center space-y-4">
      <div className="cursor-pointer">
        <Image src="/icons/logo.png" width={120} height={120} alt="Logo" />
      </div>
      <Link href="/">
        <div className="nav-link">Home</div>
      </Link>
      <Link href="/properties/categoryName" className="group">
        <div className="nav-link flex items-center pt-3">
          <div>Categories</div>
          <div className="group-hover:rotate-180 transition-all duration-300 ease-in-out">
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        <div className="group h-[10px]">
          <CategoriesDropdown />
        </div>
      </Link>
      <Link href="/packages">
        <div className="nav-link">Packages</div>
      </Link>
      <Link href="/blog">
        <div className="nav-link">Blog</div>
      </Link>
      <Link href="/contact">
        <div className="nav-link">Contact</div>
      </Link>
      <Link href="/properties">
        <div className="nav-link text-primary">Explore properties</div>
      </Link>
      <Link href="/search">
        <div className="nav-link bg-primary hover:bg-primarylight rounded-full w-12 h-12 p-3">
          <FiSearch size={25} className="flex w-full text-white h-full" />
        </div>
      </Link>
      <RxHamburgerMenu
        size={30}
        className="hover:cursor-pointer"
        onClick={toggleMobileMenu}
      />
    </div>
  );
}

export default MobileNav;
