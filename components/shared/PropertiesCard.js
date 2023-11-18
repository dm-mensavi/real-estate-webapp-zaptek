import Image from "next/image"
import locationIcon from "../../public/icons/location-icon.png"
import carIcon from "../../public/icons/car-icon.png"
import bedIcon from "../../public/icons/bed-icon.png"
import bathIcon from "../../public/icons/bath-icon.png"
import directionIcon from "../../public/icons/direction-icon.png"

const PropertiesCard = (props) => {
    return (
        <div className="properties-card border rounded-lg overflow-hidden">
            <div className="card-content relative">
                {
                    props.property.id >= 5 &&
                    <span className="absolute top-[5%] left-[5%]">
                        <p className={`inline px-3 py-[7px] rounded-md text-[12px] text-[#26272b] bg-white`}>
                            FEATURED
                        </p>
                    </span>
                }

                <figure className="">
                    <Image
                        src={props.property.image}
                        alt={props.property.description}
                        width={1500} 
                        height={1000}
                        className="block w-full object-cover object-center"
                    />
                </figure>

                <div className="description py-[30px] px-[23px] md:px-10 relative">

                    <span className="absolute -top-[5%] right-[5%]">
                        <p className={`inline px-3 py-[7px] rounded-md text-[12px] text-white ${props.property.type === "FOR SALE" ? 'bg-[#ff4444]' : 'bg-[#00D97E]'}`}>
                        {props.property.type}
                        </p>
                    </span>

                    <div className="flex flex-col gap-5">
                        <h2 className="text-primary text-[30px] font-medium">
                            {props.property.price}
                            <span className="text-[#00a862] text-base">
                                {` ${props.property.rate}`}
                            </span>
                        </h2>

                        <div className="desc-1 flex gap-5 mb-5 flex-wrap md:justify-between">
                            <div className="flex justify-center items-center gap-2">
                                <figure className="w-5">
                                    <Image
                                        className="block w-full"
                                        src={bedIcon}
                                        alt="bed icon"
                                    />
                                </figure>
                                <p className="text-primary text-[14px] sm:text-[15px] md:text-[16px]">
                                    {`${props.property.beds} Beds`}
                                </p>
                            </div>

                            <div className="flex justify-center items-center gap-2">
                                <figure className="w-5">
                                    <Image
                                        className="block w-full"
                                        src={bathIcon}
                                        alt="bath icon"
                                    />
                                </figure>
                                <p className="text-primary text-[14px] sm:text-[15px] md:text-[16px]">
                                    {`${props.property.baths} Baths`}
                                </p>
                            </div>

                            <div className="flex justify-center items-center gap-2">
                                <figure className="w-5">
                                    <Image
                                        className="block w-full"
                                        src={directionIcon}
                                        alt="direction icon"
                                    />
                                </figure>
                                <p className="text-primary text-[14px] sm:text-[15px] md:text-[16px]">
                                    {`${props.property.size} sqft`}
                                </p>
                            </div>

                            <div className="flex justify-center items-center gap-2">
                                <figure className="w-5">
                                    <Image
                                        className="block w-full"
                                        src={carIcon}
                                        alt="car icon"
                                    />
                                </figure>
                                <p className="text-primary text-[14px] sm:text-[15px] md:text-[16px]">
                                    {`${props.property.parkingspots} parking spots`}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="desc-2">
                        <h4 className="mb-[15px]">
                        {props.property.description}
                        </h4>

                        <div className="location flex items-center gap-2">
                            <figure className="w-5">
                                <Image
                                src={locationIcon}
                                alt="location icon"
                                className="block w-full"
                                />
                            </figure>
                            <p className="text-base">
                                {props.property.location}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertiesCard