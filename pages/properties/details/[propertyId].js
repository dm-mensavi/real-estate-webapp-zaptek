import Image from "next/image";
import Gallery from "../../../components/PropertiesDetails/Gallery";
import AllProperties from "../../../components/PropertiesDetails/AllProperties";
import HeaderSummary from "../../../components/shared/HeaderSummary";
import { propertydata } from "../../../data/propertydata";
import list2 from "../../../public/listing-2.jpg";
import list3 from "../../../public/listing-3.jpg";
import list4 from "../../../public/listing-4.jpg";
import list5 from "../../../public/listing-5.jpg";
// import SwiperComponent from '../../../components/PropertiesDetails/SwiperComponent'
import { LiaBedSolid } from "react-icons/lia";
import {
  PiBathtubLight,
  PiCarDuotone,
  PiTree,
  PiSwimmingPoolThin,
  PiDoorOpen,
} from "react-icons/pi";
import { BsPlusSquare } from "react-icons/bs";
import { GiCctvCamera } from "react-icons/gi";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { RiParkingBoxLine } from "react-icons/ri";
import { CiForkAndKnife } from "react-icons/ci";
import { useRouter } from "next/router";
import { properties } from "../../../data/propertiesdata";

import { FiWifi } from "react-icons/fi";
import Header from "../../../components/shared/Header";

function PropertyDetail() {
  const router = useRouter();
  const { propertyId } = router.query;
  const id = parseInt(propertyId);

  const property = properties.find((property) => property.id === id);
  const description =
    "Modern and bright, this downtown apartment offers proximity to the finest restaurants and entertainment";
  return (
    <>
      <Header
        summaryText={property.price}
        title={property.description}
        description={description}
        image={`listing-${id}`}
        cutout
      >
        <button className="btn-primary rounded-lg mt-10">Request info</button>
      </Header>
      <div className="general-margin mt-20">
        <div className="grid grid-cols-2 gap-5">
          <Gallery id={"1"} />
          <Gallery id={"2"} />
          <Gallery id={"3"} />
          <Gallery id={"4"} />
        </div>

        {/* properties details */}
        <div className="flex lg:flex-row md:flex-col sm:flex-col justify-start items-center gap-10">
          <div className="lg:w-[60%] md:w-[100%] sm:w-[100%]">
            <div className="">
              <HeaderSummary
                containerBorder="border-primary"
                textColor="text-primary"
                dotBgColor="bg-primary"
                summaryText="Property details"
              />
            </div>

            <div className="text-red-500 flex justify-between items-center lg:w-[80%] md:w-[80%] sm:w-full my-8">
              <div className="text-primary flex justify-center items-center gap-3">
                <LiaBedSolid size={30} />
                <p className="text-primary">{property.beds} Bed</p>
              </div>
              <div className="text-primary flex justify-center items-center gap-3">
                <PiBathtubLight size={30} />
                <p className="text-primary">{property.baths} Baths</p>
              </div>
              <div className="text-primary flex justify-center items-center gap-3">
                <BsPlusSquare size={30} />{" "}
                <p className="text-primary">{property.size} sqft</p>
              </div>
              <div className="text-primary flex justify-center items-center gap-3">
                <PiCarDuotone size={30} />{" "}
                <p className="text-primary">
                  {property.parkingspots} Parking spots
                </p>
              </div>
            </div>
            <hr className="my-10" />

            <div>
              <div>
                <h3 className="mb-8">Regarding the Property:</h3>
                <p>
                  In a symphony of elegance and tranquility, this property
                  reveals itself, nestling amidst the serene contours of its
                  surroundings. The facade, a harmonious blend of sophistication
                  and simplicity, whispers tales of design excellence. Each nook
                  and cranny resonate with the melody of high-quality
                  craftsmanship, the walls telling tales of unparalleled comfort
                  and timeless style.
                </p>
              </div>

              <div>
                <ul className="list-decimal my-12">
                  <li>Sed consequat leo</li>
                  <li>Vestibulum purus quam scelerisque</li>
                  <li>Vestibulum turpis sem aliquet eget</li>
                  <li>Ut non enim</li>
                  <li>Vivamus quis mi</li>
                </ul>

                <p>
                  A gateway to luxury, the property unfolds a canvas where every
                  stroke is a brush of meticulous detail, painting a world where
                  elegance meets functionality. It’s not just a dwelling, but a
                  realm where every square inch is a testament to excellence in
                  architecture, a space where the symphony of luxury and comfort
                  plays on a continuous loop, offering an unrivaled living
                  experience.
                </p>
              </div>
              <hr className="my-12" />
              <div>
                <HeaderSummary
                  containerBorder="border-primary"
                  textColor="text-primary"
                  dotBgColor="bg-primary"
                  summaryText="Property amenities"
                />
              </div>
              <div className="grid grid-cols-3 gap-y-[10%]">
                <div className="text-primary flex justify-start items-center gap-3">
                  <PiTree size={30} />
                  <p className="text-primary">Garden</p>
                </div>
                <div className="text-primary flex justify-start items-center gap-3">
                  <GiCctvCamera size={30} />
                  <p className="text-primary">Security Camera</p>
                </div>
                <div className="text-primary flex justify-start items-center gap-3">
                  <MdOutlineLocalLaundryService size={30} />
                  <p className="text-primary">Laundry</p>
                </div>
                <div className="text-primary flex justify-start items-center gap-3">
                  <FiWifi size={30} /> <p className="text-primary">Internet</p>
                </div>
                <div className="text-primary flex justify-start items-center gap-3">
                  <PiSwimmingPoolThin size={30} />
                  <p className="text-primary">Pool</p>
                </div>
                <div className="text-primary flex justify-start items-center gap-3">
                  <RiParkingBoxLine size={30} />
                  <p className="text-primary">Garage</p>
                </div>
                <div className="text-primary flex justify-start items-center gap-3">
                  <PiBathtubLight size={30} />
                  <p className="text-primary">Jacuzzi</p>
                </div>
                <div className="text-primary flex justify-start items-center gap-3">
                  <PiDoorOpen size={30} />
                  <p className="text-primary">Elevator</p>
                </div>
                <div className="text-primary flex justify-start items-center gap-3">
                  <CiForkAndKnife size={30} />
                  <p className="text-primary">Dish Washer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[30%] md:w-full sm:w-full border p-5">
            <div className="p-x-5">
              <div>
                <p className="bg-red-500 text-white p-2 rounded-lg w-fit my-4">
                  {property.type}
                </p>
                <h1>{property.price}</h1>
              </div>
              <hr className="mt-4" />
              <div>
                <h4 className=" my-4">Get in touch to receive more info</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div>
                <form className="w-full mt-4">
                  <input
                    className="border p-2 py-4 rounded w-full"
                    type="text"
                    placeholder="John Doe"
                  />{" "}
                  <br />
                  <input
                    className="border p-2 py-4 rounded my-5 w-full"
                    type="text"
                    placeholder="contact@gmail.com"
                  />{" "}
                  <br />
                  <input
                    className="border p-2 rounded w-full py-4"
                    type="text"
                    placeholder="+1 345-678"
                  />{" "}
                  <br /> <br />
                  <button className="justify-center border w-full text-center py-4 rounded hover:bg-primary hover:text-white animate">
                    Get in Touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Browse all properties */}
        <div className="bg-slate-100  my-[10%] py-5">
          <div>
            {/* <p className="border-2 border-primary rounded-2xl p-1 text-primary w-fit">
              <span className="w-50 h-50 rounded-lg bg-primary" />
              Related Property
            </p> */}
          </div>
          <div className="flex flex-col justify-center items-center pt-[10%]">
            <HeaderSummary
              containerBorder="border-primary"
              textColor="text-primary"
              dotBgColor="bg-primary"
              summaryText="Related Property"
            />
            <h1>Browse all properties</h1>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm-max:grid-cols-1 gap-5">
            <AllProperties
              propertyImage={list2}
              bed="4"
              status="FOR RENT"
              price="$10,000"
              name="Charming Studio Apartment"
              location="West City Corner"
              bath="3"
              sqft="450"
            />

            <AllProperties
              propertyImage={list3}
              bed="4"
              status="FOR SALE"
              price="$450,000"
              name="Luxury Urban Loft"
              location="8706 Herrick Aver"
              bath="3"
              sqft="450"
            />

            <AllProperties
              propertyImage={list4}
              bed="2"
              status="FOR RENT"
              price="$4,000"
              name="Elegant Suburban Family Home"
              location="8706 Herrick Aver"
              bath="1"
              sqft="450"
              featured="FEATURED"
            />

            <AllProperties
              propertyImage={list5}
              bed="2"
              status="FOR RENT"
              price="$2,000"
              name="Cozy Lakeside Cottage"
              location="8706 Herrick Aver"
              bath="1"
              sqft="450"
            />
          </div>
          <button className=" mx-auto w-fit flex justify-center items-center border rounded my-10 p-3 hover:text-white hover:bg-primary">
            Browse all proterties
          </button>
        </div>
        {/* <SwiperComponent /> */}
      </div>
    </>
  );
}

export default PropertyDetail;
