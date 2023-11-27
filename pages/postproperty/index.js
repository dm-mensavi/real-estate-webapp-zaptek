import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Header from "../../components/shared/Header";

function Post() {
  return (
		<>
			<Header image={"contact"} summaryText={"Post a Property"} styles={"mt-0"}>
				<div className="display-1 relative -top-8 text-white font-semibold max-w-2xl mx-auto ">
        Post a free Property
				</div>
			</Header>
			<motion.div
				variants={fadeIn("up", 0.5, 0)}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0 }}
				className="general-margin mb-20">
				<div className="my-10 flex justify-center items-center">
					<form className="w-[70%] font-semibold">
						<p className="my-10 text-xl text-black font-bold">
							Property information
						</p>
						<div>
							<label>Listing title<span className="text-red-500">*</span></label>
							<input
								type="text"
								placeholder="Smart cities expo"
								className="p-3 border border-slate-300 rounded my-3  focus:outline-blue-300 outline-2 w-full"
							/>
						</div>
						<div className="flex flex-col md:flex-row">
							<div className="flex flex-col mr-5 w-full">
								<label>Property category<span className="text-red-500">*</span></label>
								<input
									type="text"
									placeholder="Apartment, Villa, Office"
									className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-300 outline-2"
								/>
							</div>
							<div className="flex flex-col w-full ">
								<label>Property type<span className="text-red-500">*</span></label>
								<input
									type="text"
									placeholder="Rental or Sale"
									className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-300 outline-2"
								/>
							</div>
						</div>
						<div className="flex flex-col md:flex-row">
							<div className="flex flex-col mr-5 w-full">
								<label>Property location<span className="text-red-500">*</span></label>
								<input
									type="text"
									placeholder="New York"
									className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-300 outline-2"
								/>
							</div>
							<div className="flex flex-col w-full ">
								<label>Land sqft.<span className="text-red-500">*</span></label>
								<input
									type="text"
									placeholder="1000 sqft"
									className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-300 outline-2"
								/>
							</div>
						</div>
						<div className="flex flex-col">
							<label>Listing short description<span className="text-red-500">*</span></label>
							<textarea
								placeholder="Enter event description here..."
								className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-300 outline-2"
							/>
						</div>
						<div className="flex flex-col">
							<label>Listing short description<span className="text-red-500">*</span></label>
							<textarea
								placeholder="Tell your attendees about the schedule..."
								className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-300 outline-2"
							/>
						</div>
						<div>
							<button className="w-full py-4 my-3 btn-secondary">
								Submit for Approval
							</button>
						</div>
					</form>
				</div>
			</motion.div>
		</>
	);
}

export default Post;
