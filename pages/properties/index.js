import Header from "../../components/shared/Header"
import PropertiesCard from "../../components/shared/PropertiesCard"
import { properties } from "../../data/propertiesdata"

const propertiesHero = {
  title: 'Browse all properties',
  description: 'Discover more than 1,000+ property showcases.',
  image: 'categories',
  children: '',
  summaryText: "Explore all Properties"
}

function Categories() {
  return (
    <div>
      <Header {...propertiesHero} />

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