import { useState } from "react";
import Link from "next/link";

const CategoryLink = ({ name, to, width }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div>
			<Link href={`/guide/${to}`}>
				<div
					className="relative group"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}>
					<p>{name}</p>
					<p
						className={`w-[${width}}px] mt-1 relative bg-primarylight/40 h-[3px] overflow-hidden group`}>
						<div
							className={`w-[${width}}px]  ${
								isHovered ? "translate-x-0" : "-translate-x-40"
							} bg-primary h-[3px] transition-all duration-300 ease-in-out`}></div>
					</p>
				</div>
			</Link>
		</div>
	);
};

export default CategoryLink;
