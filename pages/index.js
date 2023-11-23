  import Header from "../components/shared/Header"
  import Image from 'next/image'
  import arrow from '../public/650adcad05bc07eb4bae8dbf_arrow.svg'
  import PropertiesSearch from "../components/shared/PropertiesSearch"
  import { SearchFilters, Properties } from "../data/Propertiesdata"
  import FilterCard from "../components/shared/FilterCard"
  import PropertiesCard from "../components/shared/PropertiesCard"
  import { motion } from "framer-motion"
  import { fadeIn, Scale } from "../components/shared/Variant"
  import Link from 'next/link'
  import HeaderSummary from "../components/shared/HeaderSummary"
  import diagonal from '../public/wave.svg'
  import { Categories } from "../data/Propertiesdata"
  import CategoryCard from "../components/home/CategoryCard"
  import AllProperties from "../components/PropertiesDetails/AllProperties"
  import ReviewCard from "../components/home/ReviewCard"
  import { Reviews } from "../data/Review"
  import MoreBlogs from "../components/blogsCompo/MoreBlogs"

  import { Swiper, SwiperSlide } from "swiper/react";
  // import required modules
  import { Navigation } from "swiper/modules";

  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import 'swiper/css/scrollbar';

  export default function Home() {
    return (
      <div className=''>
        {/* <HomeHeader /> */}
        <Header
          summaryText={"Welcome to Property"}
          title={'Where dream homes become a reality.'}
          image={"home"}
          description={'Discover more than 1,000+ property showcases.'}
        >
          <Link href={`/post-a-event`}>
            <button className="btn-primary rounded-md mt-[60px] flex justify-center items-center gap-3 group">
              Post a property

              <figure className="w-[13px] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all">
                <Image 
                  src={arrow}
                  alt="arrow"
                  className="block w-full"
                />
              </figure>
            </button>
          </Link>
        </Header>

        <main className='font-semibold'>

          <section className="px-[5%] py-[30px] ">
            <div className="section-content max-w-[1200px] mx-auto">
                <div className="section-body">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-start justify-start">
                    <PropertiesSearch />

                    {SearchFilters.map(filter => (
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

          <section className="px-[5%] pt-[60px] py-[60px] md:py-[150px]">
            <div className="section-content max-w-[1200px] mx-auto">
              <motion.div 
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                className="section-header flex justify-center items-center flex-col"
              >
                <HeaderSummary 
                  containerBorder={`border-primary `}
                  textColor={`text-primary`}
                  dotBgColor={`bg-primary`}
                  summaryText={'Featured Property'} 
                />

                <h2 
                  className={`text-[30px] font-semibold text-[#000] sm:text-[40px] md:text-[38px] leading-tight text-center mb-[5px]`}
                >
                  Our choice of popular real estate
                </h2>
              </motion.div>

            <div className="section-body mt-[60px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {Properties.map(property => (
                      property.id >= '5' && 
                      <Link href={`/properties/details/${property.id}`} key={property.id}>
                        <PropertiesCard property={property} />
                      </Link> 
                  ))}
              </div>
                
                <Link href={`/properties`}>
                  <div
                    className="flex justify-center items-center"
                  >
                    <button className="btn-secondary rounded-md mt-[60px] flex justify-center items-center gap-3 group">
                      Browse all properties
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <section className={`px-[5%] pt-[60px] pb-[185px] md:pb-[185px] md:py-[150px] bg-homeCategory bg-cover bg-center text-center relative`}>
            <div className="section-content max-w-[1200px] mx-auto">
              <motion.div 
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                className="section-header flex justify-center items-center flex-col"
              >
                <h2 
                  className={`text-[30px] font-semibold text-white sm:text-[40px] md:text-[38px] leading-tight text-center mb-[5px]`}
                >
                  Search properties by category
                </h2>
              </motion.div>

              <div className="section-body mt-[60px]">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[25px]">
                    {Categories.map(category => (
                      <motion.div
                        variants={fadeIn("up", 0.5, 0)}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: .1 }}
                        key={category.id}
                      >
                        <CategoryCard category={category}/>
                      </motion.div>
                    ))}
                </div>

                <figure className="w-full absolute -bottom-1 left-0">
                  <Image src={diagonal} alt="diagonal shape" className="block w-full"/>
                </figure>
              </div>
            </div>
          </section>
          
          <section className="px-[5%] pt-[50px] py-[60px] md:py-[80px] md:pb-[150px]">
            <div className="section-content max-w-[1200px] mx-auto">
              <motion.div 
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                className="section-header flex justify-center items-center flex-col"
              >
                <HeaderSummary 
                  containerBorder={`border-primary `}
                  textColor={`text-primary`}
                  dotBgColor={`bg-primary`}
                  summaryText={'Latest Property'} 
                />

                <h2 
                  className={`text-[30px] font-semibold text-[#000] sm:text-[40px] md:text-[38px] leading-tight text-center mb-[5px]`}
                >
                  Browse all properties
                </h2>
              </motion.div>

              <div className="section-body mt-[60px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <AllProperties />
                  <AllProperties />
                  <AllProperties />
                  <AllProperties />
                </div>
                
                <Link href={`/properties`}>
                  <div
                    className="flex justify-center items-center"
                  >
                    <button className="btn-secondary rounded-md mt-[60px] flex justify-center items-center gap-3 group">
                      Browse all properties
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <section className="bg-primarylight px-[5%] pt-[50px] py-[100px] md:pt-[80px] md:pb-[150px] text-center relative">
            <div className="">
              <div className="section-content grid xl2:grid-cols-2 items-center justify-center gap-[80px] max-w-[1200px] mx-auto">
                <motion.div
                  variants={fadeIn("up", 0.5, 0)}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  className="section-header flex flex-col justify-start items-start order-2 max-w-[500px]"
                >
                  <HeaderSummary summaryText='About us'/>

                  <h2 className="text-[30px] text-white text-left mb-1 md:text-[38px] lg:text-[43px] md:leading-tight">
                  Uncover exceptional properties at value prices only here.
                  </h2>
                  
                  <Link href={`/post-a-event`}>
                    <button className="btn-secondary hover:bg-white hover:text-black font-bold rounded-md mt-[60px] flex justify-center items-center gap-3 group">
                      Post a property

                      <figure className="w-[13px] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all">
                        <Image 
                          src={arrow}
                          alt="arrow"
                          className="block w-full filter invert-[100%]"
                        />
                      </figure>
                    </button>
                  </Link>
                </motion.div>

                <div className="section-body order-1 flex justify-center items-center">
                  <motion.div
                    variants={Scale(0.3, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center text-white w-[290px] h-[290px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] border-[3px] border-white rounded-[50%] flex justify-center items-center flex-col mr-auto relative group"
                  >
                    
                    <div className="absolute w-[0] h-[0] group-hover:w-[90%] group-hover:h-[90%] bg-white transition-all duration-300 rounded-[50%]"></div>

                    <div className="text-[70px] lg:text-[108px] xl2:text-[120px] mb-[15px] lg:mb-[30px] group-hover:text-primarylight transition-all duration-300 z-50">
                      $3.7B
                    </div>
                    <p className="text-white sm:text-[20px] mb-[10px] lg:mb-[20px] group-hover:text-primarylight transition-all duration-300 z-50">
                      Managed Properties
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-[5%] pt-[50px] py-[60px] md:py-[80px] md:pb-[150px]">
            <div className="section-content max-w-[1200px] mx-auto">
              <motion.div 
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                className="section-header flex justify-center items-center flex-col"
              >
                <HeaderSummary 
                  containerBorder={`border-primary `}
                  textColor={`text-primary`}
                  dotBgColor={`bg-primary`}
                  summaryText={'Testimonials'} 
                />

                <h2 
                  className={`text-[30px] font-semibold text-[#000] sm:text-[40px] md:text-[38px] leading-tight text-center mb-[5px]`}
                >
                  Discover our clients experiences
                </h2>
              </motion.div>

              <div className="section-body mt-[60px]">
                <motion.div 
                  variants={fadeIn("up", 0.5, 0)}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  className="review-cards"
                >
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    noSwiping
                    navigation= {true}				
                    loop={false}
                    modules={[Navigation]}
                    className="swiper-no-swiping"
                  >
                   {
                      Reviews.map((review, index) => (
                        <SwiperSlide
                          className={`${index} mr-[30px] max-w-[390px]`}
                          key={review.id}
                        >
                          <ReviewCard review={review}/>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>                    
                </motion.div>
                <div className="section-body-b mt-[150px] grid lg:grid-cols-2 items-center justify-center gap-[80px]">
                  <motion.div 
                    variants={fadeIn("up", 0.5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                    className="section-sub-header mx-auto order-2 lg:order-1 max-w-[500px]"
                  >
                    <HeaderSummary 
                      containerBorder={`border-primary `}
                      textColor={`text-primary`}
                      dotBgColor={`bg-primary`}
                      summaryText={'Download App'} 
                    />

                    <h2 
                      className={`text-[30px] font-semibold text-[#000] sm:text-[40px] md:text-[38px] leading-tight text-left mb-[5px]`}
                    >
                      Download it on your iPhone or Android and step into a world of property explorations.
                    </h2>

                    <div
                      className="download-btns flex gap-5 flex-wrap mt-[60px]"
                    >
                      <figure
                        className="w-[132px]"
                      >
                        <Image
                          src={'/icons/appstore.png'}
                          alt="google play download btn"
                          width={297}
                          height={88}
                          className="w-full block"
                        />
                      </figure>

                      <figure
                        className="w-[148.5px]"
                      >
                        <Image
                          src={'/icons/googleplay.png'}
                          alt="google play download btn"
                          width={297}
                          height={88}
                          className="w-full block"
                        />
                      </figure>
                    </div>
                  </motion.div>

                  <div className="order-1 lg:order-2">
                    <motion.div
                      variants={Scale(0.3, 0)}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <figure
                        className="rounded-3xl overflow-hidden"
                      >
                        <Image
                          src={'/mobile-app.jpg'}
                          alt="mobile app"
                          width={800}
                          height={908}
                        />
                      </figure>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-[5%] pt-[60px] py-[60px] md:py-[150px] bg-[#f7f8fc]">
            <div className="section-content max-w-[1200px] mx-auto">
              <motion.div 
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                className="section-header flex justify-center items-center flex-col"
              >
                <HeaderSummary 
                  containerBorder={`border-primary `}
                  textColor={`text-primary`}
                  dotBgColor={`bg-primary`}
                  summaryText={'From Blog'} 
                />

                <h2 
                  className={`text-[30px] font-semibold text-[#000] sm:text-[40px] md:text-[38px] leading-tight text-center mb-[5px]`}
                >
                  The latest tips
                </h2>
              </motion.div>

            <div className="section-body">
              <motion.div 
                variants={fadeIn("up", 0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                className=""
              >
                  <MoreBlogs/>
              </motion.div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
