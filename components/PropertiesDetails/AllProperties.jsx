import Image from "next/image";
import { PiBathtubLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { BsXSquare } from "react-icons/bs";

const AllProperties = ({ status, featured }) => {
  const checkstatus = (status) => {
    let color = "";
    switch (status) {
      case "FOR SALE":
        color = "bg-red-500";
        return color;
      case "FOR RENT":
        color = "bg-green-400";
        return color;
    }
  };

  const checkFeature = (featured) => {
    var color;
    if (featured === "FEATURED") {
      color = "bg-white";
      return color;
    } else {
      color = "";
      return color;
    }
  };
  return (
    <div className="relative overflow-hidden rounded-lg">
      <Image
        className=" relative hover:scale-105 hover:transition hover:duration-300 hover:ease-in-out "
        src="/gallery/gallery-3.jpg"
        width={1500}
        height={1000}
        alt="image"
      />
      <div>
        <p
          className={`absolute top-4 left-4 ${checkFeature(
            featured
          )} p-1 rounded-lg px-2 text-sm`}
        >
          {featured}
        </p>
        <p
          className={`absolute top-4 right-4 ${checkstatus(
            status
          )} text-white p-1 rounded-lg px-2 text-sm`}
        >
          {status}
        </p>
      </div>
      <div className="absolute flex justify-between items-center w-[100%] bottom-0 py-3 p-1 rounded-lg px-2 text-sm backdrop-blur-sm bg-white/30 ">
        <div>
          <p className="text-white text-2xl">$4,000,000</p>
        </div>
        <div
          className="flex justify-evenly
         gap-5"
        >
          <div className="flex justify-center gap-1 items-center">
            <IoBedOutline size={30} className="text-primarylight" />
            <p className="text-white">8 Beds</p>
          </div>
          <div className="flex justify-center gap-1 items-center">
            <PiBathtubLight size={30} className="text-primarylight" />
            <p className="text-white">2 Bath</p>
          </div>
          <div className="flex justify-center gap-1 items-center">
            <BsXSquare size={25} className="text-primarylight" />
            <p className="text-white">1 sqft</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-20 ">
        {" "}
        <div className="flex pl-5 gap-2 items-center justify-center">
          <CiLocationOn size={25} className="text-white" />
          <p className="text-white ">Northridge Community</p>
        </div>
      </div>
      <p className="absolute bottom-32 text-white pl-5">3-Bedroom Townhouse</p>
    </div>
  );
};

export default AllProperties;
