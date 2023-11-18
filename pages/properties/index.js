import Header from "../../components/shared/Header"
import PropertiesCard from "../../components/propertiesCard"
import { properties } from "../../data/propertiesdata"

function Categories() {
  const headerprops = {
    title: 'Props',
    description: '123',
    image: 'categories',
    children: 'e'
  }

  return (
    <div>
      <Header {...headerprops} />

      <section className="px-[5%] pt-[50px] py-[60px] md:pt-[80px] md:pb-[150px]">
        <div className="">
          <div className="section-content">
            <div className="section-body">
              {properties.map(property => (
                <div key={property.id}>
                  <PropertiesCard property={property} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Categories