import Link from "next/link";
import Image from "next/image";

function CategoryImage({ imageUrl, to, text }) {
	return (
		<div className="h-full">
			<Link href={`/properties/${to}`}>
				<Image 
					src={`/${imageUrl}.jpeg`}
					width={1500}
					height={1000}
					alt={text}
					className="absolute w-[20%] h-[20%] rounded-lg"
				/>
				<div className="absolute text-white pt-12 pl-4 font-semibold w-[20%] h-[20%] rounded-lg bg-gradient-to-t from-black/40 to-transparent">
					{text}
				</div>
			</Link>
		</div>
	);
}

export default CategoryImage;
