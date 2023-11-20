import Link from "next/link"
import CategoryImage from "./CategoryImage"
import CategoryLink from "./CategoryLink"
import dynamic from "next/dynamic"

function MobileCategoriesDropdown() {
  return (
    <div className="flex flex-col sm:flex-row  pt-8 h-[100%] sm:h-[400px] w-[85vw] justify-between bg-white">
			
			{/* Order by category column */}
			<div className="flex flex-col space-y-4 mb-5 -mr-14">
				<h5 className="text-primary text-xl">by Category</h5>
				<Link className="pl-3 nav-link text-xl" href="/properties/House">House</Link>
				<Link className="pl-3 nav-link text-xl" href="/properties/Loft">Loft</Link>
				<Link className="pl-3 nav-link text-xl" href="/properties/Apartment">Apartment</Link>
				<Link className="pl-3 nav-link text-xl" href="/properties/Office">Office</Link>
			</div>


			{/* Order by type column*/}
			<div className="flex flex-col space-y-4 mb-5 -mr-14">
				<h5 className="text-primary text-xl">by Type</h5>
				<Link className="pl-3 nav-link text-xl" href="/properties/Sale">Sale</Link>
				<Link className="pl-3 nav-link text-xl" href="/properties/Rent">Rent</Link>
			</div>

			{/* Order by location column */}
			<div className="flex flex-col space-y-3 mb-5">
				<h5 className="text-primary  text-xl">by Location</h5>
				<CategoryImage imageUrl={"Manhattan"} to={"manhattan"} text={"Manhattan, NY"}/>
				<CategoryImage imageUrl={"London"} to={"london"} text={"London, UK"}/>
				<CategoryImage imageUrl={"Miami"} to={"miami"} text={"Miami, FL"}/>
			</div>
			
			{/* Getting started column */}
			<div className="flex flex-col space-y-4 mb-5">
				<h5 className="text-primary text-xl">Get started</h5>

				<div className="w-[45px] text-xl">
					<CategoryLink name={"Legal"} to={""} width={50} />
				</div>
				<div className="w-[100px] text-xl">
					<CategoryLink name={"Style Guide"} to={"styleguide"} width={50} />
				</div>
				<div className="w-[140px] text-xl">
					<CategoryLink
						name={"Image Licensing"}
						to={"imagelicensing"}
						width={50}
					/>
				</div>
				<div className="w-[100px]">
					<CategoryLink name={"Changelog"} to={"changelog"} width={50} />
				</div>
			</div>
		</div>
  )
}

// export default MobileCategoriesDropdown;
export default dynamic (() => Promise.resolve(MobileCategoriesDropdown), {ssr: false});
