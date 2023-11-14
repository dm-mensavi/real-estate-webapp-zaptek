import Link from "next/link";
import Underline from "./Underline";

const CategoriesDropdown = () => {
	return (
		<div className="hidden fixed top-20 pt-10 left-0 right-0 h-[400px] justify-between group-hover:flex bg-white w-full general-margin">
			<div className="flex flex-col space-y-4 ml-10">
				<h5 className="text-primary">by Category</h5>
				<Link href="/properties/House">House</Link>
				<Link href="/properties/Loft">Loft</Link>
				<Link href="/properties/Apartment">Apartment</Link>
				<Link href="/properties/Office">Office</Link>
			</div>
			<div className="flex flex-col space-y-4">
				<h5 className="text-primary">by Type</h5>
				<Link href="/properties/Sale">Sale</Link>
				<Link href="/properties/Rent">Rent</Link>
			</div>
			<div className="flex flex-col space-y-4">
				<h5 className="text-primary">by Location</h5>
			</div>
			<div className="flex flex-col space-y-5 mr-20">
				<h5 className="text-primary">Get started</h5>
        
				{/* <Link href="/guide">
					<div>Legal</div>
					<Underline width={50} />
				</Link>

				<Link href="/guide/styleguide">
					<div>style Guide</div>
					<Underline width={50} />
				</Link>

				<Link href="/guide/imagelicensing">
					<div>Image Licensing</div>
					<Underline width={50} />
				</Link>

				<Link href="/guide/changelog">
					<div>Changelog</div>
					<Underline width={50} />
				</Link> */}
			</div>
		</div>
	);
};

export default CategoriesDropdown;
