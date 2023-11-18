import Header from "../../components/shared/Header"
import PropertiesCard from "../../components/shared/PropertiesCard"
import { properties } from "../../data/propertiesdata"
import Image from "next/image"
import locationIcon from "../../public/icons/location-icon.png"
import carIcon from "../../public/icons/car-icon.png"
import bedIcon from "../../public/icons/bed-icon.png"
import bathIcon from "../../public/icons/bath-icon.png"
import directionIcon from "../../public/icons/direction-icon.png"
import mm from '../../public/listing-1.jpg'

function Categories() {
  const headerprops = {
    title: 'Props',
    description: '123',
    image: 'categories',
    children: 'e'
  }

  const propety = {
    id: 1,
    price:"$4,000,000",
    rate:"",
    description:"3-Bedroom Townhouse",
    location:"Northridge Community",
    beds: 8,
    baths: 2,
    size: 1,
    parkingspots: 4,
    image: "/listing-1.jpg",
    type:"FOR SALE",
    category:"Loft",
    city:"Manhattan, NY",
  }

  return (
    <div>
      {/* <Header {...headerprops} /> */}

      <section className="px-[5%] pt-[50px] py-[60px] md:pt-[80px] md:pb-[150px]">
        <div className="flex justify-center">
          <div className="section-content max-w-[1200px]">
            <div className="section-body">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {properties.map(property => (
                    <div key={property.id}>
                      <PropertiesCard property={property} />
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Categories