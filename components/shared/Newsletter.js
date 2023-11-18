import Image from "next/image"
import diagonal from '../../public/wave.svg'
import submitArrow from '../../public/650adcad05bc07eb4bae8dbf_arrow.svg'
import check from '../../public/icons/check.png'


const Newsletter = () => {
  return (
    <div>
      <section className="bg-primarylight px-[5%] pt-[50px] py-[100px] md:pt-[80px] md:pb-[150px] text-center relative">
        <div className="flex justify-center items-center">
          <div className="section-content flex gap-4 flex-col max-w-[580px]">
            <div className="section-header">
              <div className="inline-block border-[2px] rounded-3xl mb-6">
                <div className="flex justify-center items-center gap-[10px] py-[5px] pl-[11px] pr-[15px]">
                  <div className="w-[10px] h-[10px] bg-white rounded-[50%]"></div>

                  <h4 className="text-white text-[16px]">
                    Join us today
                  </h4>
                </div>
              </div>
              <h2 className="text-[30px] text-white mb-1 md:text-[38px] lg:text-[43px] md:leading-tight">
                Join our mailing list for the latest in property listings.
              </h2>
            </div>

            <div className="">
              <div className="section-body">
                <h4 className="text-white mt-[30px] opacity-80 md:mt-2 md:text-[15px]">
                  Subscribe to our weekly email newsletter
                </h4>

                <div className="mt-[20px]">
                  <div className="text-center">
                   <div className="flex justify-center items-center flex-col">
                    <form 
                      className="w-full flex justify-between items-center border p-2 rounded-[40px] bg-[#f7f8fc] md:max-w-[384px]"
                    >
                        <div className="px-2 w-full text-secondary ">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Enter your email..."
                            className="bg-transparent w-full outline-none px-[12px]"
                          />
                        </div>
                        <button className="p-4 rounded-[50%] bg-primary hover:bg-primarylight transition-all duration-200">
                          <figure className="w-6 h-6">
                            <Image 
                              src={submitArrow} 
                              alt="submit arrow" 
                              className="block w-full"
                            />
                          </figure>
                        </button>
                      </form>

                      <div className="mt-[25px] flex justify-start items-center gap-3">
                        <figure className="w-5">
                          <Image src={check} alt="check" className="w-full" />
                        </figure>
                        <p className="text-[13px] opacity-80 text-white text-left md:text-[15px]">
                          Join our newsletter alongside 10,000 other users
                        </p>
                    </div>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <figure className="w-full absolute bottom-0 left-0">
          <Image src={diagonal} alt="diagonal shape" className="block w-full"/>
        </figure>
      </section>
    </div>
  )
}

export default Newsletter