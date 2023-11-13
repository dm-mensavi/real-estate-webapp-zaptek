import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

function Layout({ children }) {
	return (
		<div>
			<Navbar />
			{children}
			<Newsletter />
			<Footer />
		</div>
	);
}

export default Layout;
