import PackageCards from "../../components/packages/PackageCard";
import HeaderSummary from "../../components/shared/HeaderSummary";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/shared/Variant";

function Packages() {
	return (
		<div className="my-14 md:my-20 general-margin">
			<div className="flex pt-14 flex-col mx-auto items-center sm:pt-20 ">
				<motion.div
					variants={fadeIn("up", 0.5, 0.2)}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0 }}
					className="flex justify-center">
					<HeaderSummary
						containerBorder={`border-primary `}
						textColor={"text-primary"}
						dotBgColor={"bg-primary"}
						summaryText={"Pricing"}
					/>
				</motion.div>
				<motion.h1
					variants={fadeIn("up", 0.5, 0.4)}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0 }}
					className="text-secondary display-2 md:display-1 lg:font-bold max-w-md text-center sm:max-w-2xl">
					Acquire a featured listing voucher
				</motion.h1>
			</div>
			<div>
				<PackageCards />
			</div>
		</div>
	);
}

export default Packages;
