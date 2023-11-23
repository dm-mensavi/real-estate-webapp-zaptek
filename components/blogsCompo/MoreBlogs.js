import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Blogdata } from "../../data/Blogdata";
import HeaderSummary from '../shared/HeaderSummary';

const MoreBlogs = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid-cols-2 sm:grid lg:flex lg:flex-row gap-6 pt-16">
				{Blogdata.map((blogs) => (
					<div key={blogs.id}>
						<Link href={`/blog/${blogs.id}`}>
							<Image src={blogs.image} width={1500} height={1000} alt="imag" className="rounded-lg" />
						</Link>
						<div className="pt-8">
							<HeaderSummary 
								containerBorder={`border-primary`}
								textColor={`text-primary`}
								dotBgColor={`bg-primary`}
								summaryText={blogs.date} 
							/>
						</div>


						<div>
							<h3 className="text-black">{blogs.title} </h3>
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
  )
}

export default MoreBlogs
