import Header from "../../components/shared/Header"
import PropertiesCard from "../../components/shared/PropertiesCard"
import { fadeIn } from "../../components/shared/Variant"
import FilterCard from "../../components/shared/FilterCard"
import PropertiesSearch from "../../components/shared/PropertiesSearch"
import { propertiesHero } from "../../data/propertiesdata"
import { properties } from "../../data/propertiesdata"
import Link from "next/link"
import { searchFilters } from "../../data/propertiesdata"
import { motion } from "framer-motion"


function Categories() {
  return (
    <div>
      <Header {...propertiesHero} />

      <section className="px-[5%] py-[30px] ">
        <div className="section-content max-w-[1200px] mx-auto">
            <div className="section-body">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-start justify-start">
                <PropertiesSearch />

                {searchFilters.map(filter => (
                  <motion.div 
                  variants={fadeIn("up", 0.5, 0)}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                    key={filter.id}   
                    className="col-span-1"
                  >
                    <FilterCard filter={filter}/>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
      </section>

      <section className="px-[5%] pt-[50px] py-[60px] md:pt-[80px] md:pb-[150px]">
        <div className="section-content max-w-[1200px] mx-auto">
          <div className="section-body">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {properties.map(property => (
                    <Link href={`/properties/property-detail/${property.id}`} key={property.id}>
                      <PropertiesCard property={property} />
                    </Link>
                ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Categories