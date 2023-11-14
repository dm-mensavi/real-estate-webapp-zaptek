import Navbar from "./Navbar";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Layout;
