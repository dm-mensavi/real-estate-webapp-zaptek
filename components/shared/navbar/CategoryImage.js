import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function CategoryImage({ imageUrl, to, text }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="h-full">
			<Link href={`/properties/${to}`}>
				<Image
					src={`/${imageUrl}.jpeg`}
					width={1500}
					height={1000}
					alt={text}
					className={`absolute w-[20%] h-[20%] rounded-lg transition-transform duration-300 ease-in-out transform ${
						isHovered ? "-translate-y-1" : "translate-y-0"
					}`}
				/>
				<div
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					className={`absolute text-white pt-12 pl-4 font-semibold w-[20%] h-[20%] rounded-lg bg-gradient-to-t from-black/40 to-transparent transition-transform duration-300 ease-in-out transform ${
						isHovered ? "-translate-y-1" : "translate-y-0"
					}`}>
					{" "}
					{text}
				</div>
			</Link>
		</div>
	);
}

export default CategoryImage;
