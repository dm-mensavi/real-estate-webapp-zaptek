import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { Blogdata } from "../../data/Blogdata";
import MoreBlogs from "../../components/blogsCompo/MoreBlogs";
import HeaderSummary from "../../components/shared/HeaderSummary";
import CategoryLink from "../../components/shared/navbar/CategoryLink";
import Nopage from "../../components/shared/Nopage";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const BlogId = () => {
	const router = useRouter();
	const blockId = router.query.blogDetail;
	const id = parseInt(blockId);

	const filteredBlog = Blogdata.find((blog) => blog.id === id);

	if (filteredBlog) {
		
		return (
			<div className="mt-20">
				<div className="general-margin lg:mx-20 xl:mx-32">
					<motion.div
						variants={fadeIn("up", 0.5, 0.2)}
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0 }}
						className="flex pt-14 flex-col sm:flex-col lg:flex-col xl:flex-col gap-6 sm:gap-6 sm:pl-12 sm:pr-12 mx-auto items-center sm:pt-20">
						<HeaderSummary
							containerBorder={`border-primary`}
							textColor={`text-primary`}
							dotBgColor={`bg-primary`}
							summaryText={filteredBlog.date}
						/>
						<h1 className="text-primary font-bold text-3xl sm:text-5xl text-center max-w-3xl">
							Top trends shaping the future of luxury Real Estate
						</h1>
					</motion.div>
					<motion.div
						variants={fadeIn("up", 0.5, 0.4)}
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0 }}
						className="pt-20">
						<Image
							src={`/blog-${id}.jpg`}
							alt=""
							width={1500}
							height={1000}
							className="rounded-xl"
						/>
						<p className="pt-10">
							The rich text element allows you to create and format headings,
							paragraphs, block-quotes, images, and video all in one place
							instead of having to add and format them individually. Just
							double-click and easily create content.
						</p>
						<p className="pt-4">
							For dynamic content, add a rich text field to any collection and
							then connect a rich text element to that field in the settings
							panel. Headings, paragraphs, block-quotes, figures, images, and
							figure captions can all be styled.
						</p>
						<h3 className="pt-6">We love design beautiful things.</h3>
						<p className="pt-6">
							Headings, paragraphs, blockquotes, figures, images, and figure
							captions can all be styled after a class is added to the rich text
							element using the <q>When inside of</q> nested selector system. A
							rich text element can be used with static or dynamic content. For
							static content, just drop it into any page and begin editing.
						</p>
						<div className="border-l-2 pl-8 border-primary mt-6 mb-6 md:pl-14 pr-14">
							<h2 className="font-semibold">
								A rich text element can be used with static or dynamic content.
								For static content, just drop it into any page and begin
								editing.
							</h2>
						</div>
						<p className="pt-6">
							The rich text element allows you to create and format headings,
							paragraphs, blockquotes, images, and video all in one place
							instead of having to add and format them individually. Just
							double-click and easily create content.
						</p>
						<h3 className="pt-4">
							How to customize formatting for each rich text.
						</h3>
						<p className="pt-6">
							The rich text element allows you to create and format headings,
							paragraphs, blockquotes, images, and video all in one place
							instead of having to add and format them individually. A rich text
							element can be used with static or dynamic content. For static
							content, just drop it into any page and begin editing. For dynamic
							content, add a rich text field to any collection and then connect
							a rich text element to that field in the settings panel. Voila!
						</p>
						<div className="pt-10 pb-32 w-[110px]">
							<CategoryLink
								to={`/blog`}
								name={"Back to Blog"}
								styles={"text-primary text-[1.1rem] -mb-1"}
							/>
						</div>
					</motion.div>
				</div>
				<div className="flex flex-col gap-6 bg-gray-100 pb-20 general-margin">
					<div className="pt-32 -mb-10 flex  items-center flex-col">
						<HeaderSummary
							containerBorder={`border-primary`}
							textColor={`text-primary`}
							dotBgColor={`bg-primary`}
							summaryText={"From Blog"}
						/>
						<h1 className="font-bold text-center">Realted posts</h1>
					</div>
					<div className="">
						<MoreBlogs />
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<>
				<Nopage />
			</>
		);
	}
};

export default BlogId;
