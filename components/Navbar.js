import Link from "next/link";
import React from "react";

function Navbar() {
	return (
		<div className="flex justify-between h4 space-x-5">
			<Link href="/">Home</Link>
			<Link href="/properties/categoryName">Categories</Link>
			<Link href="/packages">Packages</Link>
			<Link href="/blog">Blog</Link>
			<Link href="/contact">Contact</Link>
			<Link href="/properties">Explore properties</Link>
			<Link href="/search">Search</Link>
		</div>
	);
}

export default Navbar;
