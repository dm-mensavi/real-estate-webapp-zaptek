import Image from 'next/image'
import Gallery from '../../../components/PropertiesDetails/Gallery'
import AllProperties from '../../../components/PropertiesDetails/AllProperties'
function PropertyDetail() {
  return (
    <div>
      <div className='grid grid-cols-2 gap-5'>
       <Gallery />
       <Gallery />
       <Gallery />
       <Gallery />
      </div>

      {/* properties details */}
      <div className='flex justify-start items-center gap-10'>
        <div className='w-[60%]'>
            <div className=''>
           <p className='border-2 border-primary rounded-2xl p-1 text-primary w-fit'><span className='w-50 h-50 rounded-lg bg-primary'/>Properties Details</p>
            </div>

            <div className='text-red-500 flex justify-between items-center'>
              <p>4 Bed</p>
              <p>3 Baths</p>
              <p>450 sqft</p>
              <p>4 Parking spots</p>
            </div>
            <hr/>

            <div>
            <div>
              <h3>Regarding the Property:</h3>
              <p>In a symphony of elegance and tranquility, this property reveals itself, nestling amidst the serene contours of its surroundings. The facade, a harmonious blend of sophistication and simplicity, whispers tales of design excellence. Each nook and cranny resonate with the melody of high-quality craftsmanship, the walls telling tales of unparalleled comfort and timeless style.</p>
            </div>

            <div>
              <ul className='list-decimal'>
                <li>Sed consequat leo</li>
                <li>Vestibulum purus quam scelerisque</li>
                <li>Vestibulum turpis sem aliquet eget</li>
                <li>Ut non enim</li>
                <li>Vivamus quis mi</li>
              </ul>

              <p>
              A gateway to luxury, the property unfolds a canvas where every stroke is a brush of meticulous detail, painting a world where elegance meets functionality. It’s not just a dwelling, but a realm where every square inch is a testament to excellence in architecture, a space where the symphony of luxury and comfort plays on a continuous loop, offering an unrivaled living experience.
              </p>
            </div>
            <hr/>

            <div className='grid grid-cols-3'>
              <div><p>Garden</p></div>
              <div><p>Security Camera</p></div>
              <div><p>Laundry</p></div>
              <div><p>Internet</p></div>
              <div><p>Pool</p></div>
              <div><p>Garage</p></div>
              <div><p>Jacuzzi</p></div>
              <div><p>Elevator</p></div>
              <div><p>Dish Washer</p></div>
            </div>
            </div>
        </div>

        <div className='w-[40%] border p-5'>
          <div>
          <p className='bg-red-500 text-white p-2 rounded-lg w-fit'>FOR SALE</p>
          <h1>$450,000</h1>
          </div>
          <hr/>
          <div>
            <h4>Get in touch to receive more info</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <form>
              <input className='border p-2 rounded' type='text' placeholder='John Doe'/>
              <input className='border p-2 rounded my-5' type='text' placeholder='John Doe'/>
              <input className='border p-2 rounded' type='text' placeholder='John Doe'/>
              <button>Get in Touch</button>
            </form>
          </div>
        </div>

      </div>

{/* Browse all properties */}
      <div>
      <div className=''>
           <p className='border-2 border-primary rounded-2xl p-1 text-primary w-fit'><span className='w-50 h-50 rounded-lg bg-primary'/>Related Property</p>
            </div>
            <h1>Browse all properties</h1>

            <div className='grid grid-cols-2 gap-5'>
              <AllProperties />
              <AllProperties />
              <AllProperties />
              <AllProperties />
            </div>
      </div>
    </div>
  )
}

export default PropertyDetail