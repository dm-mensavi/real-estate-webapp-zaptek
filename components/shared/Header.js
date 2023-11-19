import HeaderSummary from "./HeaderSummary"
import Image from "next/image"
import diagonal from '../../public/wave.svg'
import { motion } from "framer-motion"
import { fadeIn } from "./Variant"


const Header =({title, description, image, children, summaryText}) => {

  return (
    <div className={`bg-${image} bg-cover bg-center text-center pt-[182px] pb-[154px] px-[5%] lg:pt-[240px] lg:pb-[220px] relative`}>
      <div className=''>
        <motion.div
          variants={fadeIn("up", 0.5, 0.2)}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
        >
          <HeaderSummary summaryText={summaryText}/>
        </motion.div>

        <motion.h1 
          variants={fadeIn("up", 0.5, 0.4)}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          className='text-[33px] text-[#ffffff] sm:text-[40px] md:text-[68px] leading-tight'
        >
          {title}
        </motion.h1>

        <motion.p 
          variants={fadeIn("up", 0.5, 0.6)}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          className='text-[19px] mt-[30px] text-[#ffffe6] sm:text-[20px] md:text-[21px]'
        >
          {description}
        </motion.p>

        <div className=''>{children}</div>
      </div>

      <figure className="w-full absolute bottom-0 left-0">
          <Image src={diagonal} alt="diagonal shape" className="block w-full"/>
        </figure>
    </div>
  )
}

export default Header