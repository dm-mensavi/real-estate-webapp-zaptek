import Link from 'next/link'
import Image from 'next/image'
import { SearchResults } from "../../data/SearchData"
import PropertiesSearch from '../../components/shared/PropertiesSearch'

function Search() {
  return (
    <div>
      <div className="section-content">
        <section className="pt-[90px] pb-[60px] px-[5%] custom-lg:py-[150px]">
          <div className="section-header">
            <h1>
              Search results
            </h1>
          </div>
          <div className="section-body">
            <div className="overflow-hidden rounded-md relative mt-[25px]">
              <div className="relative">
                  <Image
                  src={'/icons/search.png'}
                  width={240}
                  height={240}
                  alt="search icon"
                  className="w-7 h-7 absolute top-[25%] left-4"
                  />
                  <input
                    id="search"
                    name="search"
                    type="text"
                    placeholder="Property type, Keywords..."
                    required
                    className="w-full border rounded-md transition-all outline-primary outline-1 py-[17px] pr-[12px] pl-[52px] placeholder:text-[18px] placeholder:text-[#6e6e6e]"
                  />
              </div>
            </div>

            <div className="pt-[50px]">
              {SearchResults.map(result => (
                <div key={result.id} className="mb-[20px] border rounded-md shadow-customA">
                  <div className="py-[28px] px-[34px]">
                    <h4 className="text-[20px]">
                      <Link href={result.to}>
                        {result.title}
                      </Link>
                    </h4>

                    <p className="mt-[25px] text-[#6e6e6e]">
                      {result.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </section>
      </div>
    </div>
  )
}

export default Search
