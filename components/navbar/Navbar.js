import Link from "next/link";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import Underline from "./Underline";
import CategoriesDropdown from "./CategoriesDropdown";

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 h-20 bg-white p-4 flex items-center justify-between z-50 px-4	sm:px-10 lg:px-20 xl:px-28 2xl:px-[10%]">
			<div className="flex items-center justify-start space-x-5">
				<Link href="/">
					<div className="mr-4 cursor-pointer">
						<Image src="/icons/logo.png" width={120} height={120} alt="Logo" />
					</div>
				</Link>
				<div className="hidden lg:flex items-center justify-start space-x-5">
					<Link href="/">
						<div className="nav-link">Home</div>
					</Link>
					<Link href="/properties/categoryName" className="group">
						<div className="nav-link flex items-center pt-3">
							<div>Categories</div>
							<div className="group-hover:rotate-180 transition-all duration-300 ease-in-out"><MdOutlineKeyboardArrowDown /></div>
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
				</div>
			</div>
			<div className="hidden group relative lg:flex items-center justify-between space-x-4">
				<Link href="/properties">
					<div className="nav-link text-primary">Explore properties</div>
					<Underline width={150}/>
				</Link>

				<Link href="/search">
					<div className="nav-link bg-primary hover:bg-primarylight rounded-full w-12 h-12 p-3">
						<FiSearch size={25} className="flex w-full  text-white h-full" />
					</div>
				</Link>
			</div>
			<div className="lg:hidden">
				<RxHamburgerMenu size={30} className="hover:cursor-pointer" />
			</div>
		</nav>
	);
};

export default Navbar;
