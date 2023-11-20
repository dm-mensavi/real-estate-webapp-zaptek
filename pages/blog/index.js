import Image from "next/image";
import Link from "next/link";
import { blogdata } from "../../data/blogdata";
import Header from "../../components/shared/Header";

function Blog() {
	return (
		<>
		<Header  summaryText={"From Blog"} title={"The latest tip"} image={"blog"}/>

		<div className="general-margin pb-10">
			<div className="flex flex-col sm:grid-cols-2 sm:grid lg:flex lg:flex-row gap-6 pt-16">
				{blogdata.map((blogs) => (
					<div key={blogs.id}>
						<Link href={`/blog/${blogs.id}`}>
							<Image src={blogs.image} alt="imag" className="rounded-lg" />
						</Link>
						<div className="pt-8">
							<button className="h-10 w-40 border-2 rounded-3xl border-primary">
								<ul className="list-disc">
									<li className=" text-primary">{blogs.date} </li>
								</ul>
							</button>
						</div>
						<div>
							<h3 className="text-black pt-8">{blogs.title} </h3>
						</div>
						<div className="pt-12">
							<Link href={`/blog/${blogs.id}`}>
								<button className="text-primary border-b-2 border-[#BAE7D4]">
									Read More
								</button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
		</>
	);
}

export default Blog;
