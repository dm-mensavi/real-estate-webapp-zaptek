import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"
import { blogdata } from "../../data/blogdata"
import blog2 from '../../public/blog-2.jpg'

const blogId = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const blockId = router.query.blogDetail;
  const id = parseInt(blockId);
  
  return (
    <div>
         <div className="general-margin ">
      <div className="flex pt-14 flex-col sm:flex-col lg:flex-col xl:flex-col gap-6 sm:gap-6 sm:pl-32 sm:pr-32 items-center sm:pt-20 lg:w-[1100px]">
      <button className="h-10 w-40 border-2 rounded-3xl border-primary">
        <ul className="list-disc">
          <li className=" text-primary">January 10, 2023</li>
        </ul>
      </button>
        <h1 className="text-primary font-bold text-3xl sm:text-5xl text-center font-bold pl-2 pr-2">Top trends shaping the future of luxury Real Estate</h1>
      </div>
      <div className="pt-20 md:px-56">
        <Image src={`/blog-${id}.jpg`} alt="" width={1500} height={1000} className="rounded-xl"/>
        <p className="pt-10">The rich text element allows you to create and format headings, paragraphs, block-quotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
        <p className="pt-4">For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Headings, paragraphs, block-quotes, figures, images, and figure captions can all be styled.</p>
        <h3 className="pt-6">We love design beautiful things.</h3>
        <p className="pt-6">Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the <q>When inside of</q> nested selector system. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing.</p>
       <div className="border-l-2 pl-8 border-primary mt-6 mb-6 pl-14 pr-14">
       <h2 className="font-semibold">A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing.</h2>
       </div>
        <p className="pt-6">The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
        <h3 className="pt-4">How to customize formatting for each rich text.</h3>
        <p className="pt-6">The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
        <div className="pt-8 pb-20">
          <button className="text-primary border-b-2 border-[#BAE7D4]">Back to Blog</button>
          </div>
      </div>
      </div>
      <div className="flex flex-col gap-6 bg-gray-100 pb-36 general-margin">
      <div className="pt-40 flex  items-center flex-col">
          <button className="h-10 w-40 border-2 rounded-3xl border-primary">
        <ul className="list-disc">
          <li className=" text-primary">From Blog</li>
        </ul>
      </button>
      <h1 className="pt-4 text-center">Realted posts</h1>
          </div>
        <div className="flex flex-col sm:grid-cols-2 sm:grid lg:flex lg:flex-row gap-6 pt-16">
        {blogdata.map((blogs)=>(
         <div key={blogs.id}>
          <Link href={`/blog/${blogs.id}`}>
          <Image src={blogs.image} alt='imag' className="rounded-lg" />
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
          <button className="text-primary border-b-2 border-[#BAE7D4]">Read More</button>
          </div>
         </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default blogId