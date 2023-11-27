import Header from "../../components/shared/Header";
import FAQ from "../../components/FAQ/FAQ";
import { faqdata } from "../../data/faqdata";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import HeaderSummary from "../../components/shared/HeaderSummary";
function Contact() {
	return (
		<>
			<Header image={"contact"} summaryText={"Contact us"} styles={"mt-0"}>
				<div className="display-1 relative -top-8 text-white font-bold max-w-2xl mx-auto ">
					Speak with a property specialist
				</div>
			</Header>
			<motion.div
				variants={fadeIn("up", 0.5, 0)}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0 }}
				className="general-margin my-20">
				<div className=" flex justify-center items-center">
					<form className="w-[70%] font-semibold">
						<div className="flex flex-col md:flex-row">
							<div className="flex flex-col mr-5 w-full">
								<label>Name</label>
								<input
									type="text"
									placeholder="John Doe"
									className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-500 outline-2"
								/>
							</div>
							<div className="flex flex-col w-full ">
								<label>Email</label>
								<input
									type="email"
									placeholder="contact@email.com"
									className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-500 outline-2"
								/>
							</div>
						</div>
						<div className="flex flex-col md:flex-row">
							<div className="flex flex-col mr-5 w-full">
								<label>Phone</label>
								<input
									type="tel"
									placeholder="+1 345-678"
									className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-500 outline-2"
								/>
							</div>
							<div className="flex flex-col w-full">
								<label>Company</label>
								<input
									type="text"
									placeholder="Add Company"
									className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-500 outline-2"
								/>
							</div>
						</div>
						<div className="flex flex-col w-full">
							<label>Message</label>
							<textarea
								placeholder="Please type your message here..."
								className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-500 outline-2"
							/>
						</div>
						<div>
							<button className="w-full  my-3 btn-secondary">
								Get in Touch
							</button>
						</div>
					</form>
				</div>

				{/* FAQ */}
				<motion.div 
					variants={fadeIn("up", 0.5, 0)}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0 }}
				
				className="flex flex-col justify-center items-center mt-20 mb-10">
					<HeaderSummary
						containerBorder="border-primary"
						textColor="text-primary"
						dotBgColor="bg-primary"
						summaryText="FAQ"
					/>
					<h1 className="">Frequently asked questions</h1>
				</motion.div>
				<motion.div
					variants={fadeIn("up", 0.5, 0)}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0 }}
					className="grid sm:grid-cols-1">
					{faqdata.map((faq, index) => {
						return (
							<FAQ key={index} question={faq.questions} answer={faq.answers} />
						);
					})}
				</motion.div>
				<p className="py-10">
					Didn’t find what you were looking for? Visit our Support Center or
					learn more about Event Template
				</p>
			</motion.div>
		</>
	);
}

export default Contact;
