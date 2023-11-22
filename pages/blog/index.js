
import MoreBlogs from "../../components/blogsCompo/MoreBlogs";
import Header from "../../components/shared/Header";

function Blog() {
	return (
		<>
		<Header  summaryText={"From Blog"} title={"The latest tip"} image={"blog"}/>

		<div className="general-margin pb-10">
			<MoreBlogs/>
		</div>
		</>
	);
}

export default Blog;
