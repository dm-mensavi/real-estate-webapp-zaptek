import { useState } from "react"
import arrow from '../../../public/651175a3d472aedd788836cb_arrow.svg'
import Image from "next/image"

const FilterCard = (props) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="cursor-pointer"
        >
            <div>
                <div className={`px-[25px] py-[28px] border rounded-md flex justify-between items-center ${isHovered ? 'shadow-customB' : 'shadow-customA'} transition-all`}>
                    <h4 className="text-[#6e6e6e] font-medium">
                        {props.filter.type}
                    </h4>
                    <figure className="w-[20px]">
                        <Image
                            src={arrow}
                            alt="arrow"
                            className="rotate-45 w-full block"
                        />
                    </figure>
                </div>
                {
                    isHovered && 
                    <div className="px-[25px] py-2 border mt-2 rounded-md">
                        {props.filter.subTypes.map( subtype => (
                            <div key={subtype}>
                                <h4 className="text-[16px] text-[#6e6e6e] py-2 capitalize hover:text-black transition-all">
                                    {subtype}
                                </h4>
                            </div>
                        ) )}
                    </div>
                }
            </div>
        </div>
    )
}

export default FilterCard