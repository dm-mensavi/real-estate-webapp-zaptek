import Navbar from "./Navbar";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			<div className="mt-14">
			{children}
			</div>
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Layout;
