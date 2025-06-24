// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1aiml from '../../../assets/images/aiml.png'
import slide2uiux from '../../../assets/images/uiux.png'
import slide3cyber from '../../../assets/images/cyber.png'
import slide4data from '../../../assets/images/data.png'
import slide5cloud from '../../../assets/images/cloud.png'
import slide6adm from '../../../assets/images/ADM.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const ServicesArea = () => {
    return (
        <div className='bg-[#F9F9FF] w-full lg:p-20  '>
            <h2 className='text-2xl text-[#2D3748] mb-10 font-bold'>Services we offer</h2>
            <Swiper
                slidesPerView={3}
                
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                breakpoints={{
                    1024: {
                      slidesPerView: 3,
                      

                    },
                    768: {
                      slidesPerView: 2,
                      
                    },
                    480: {
                      slidesPerView: 1,
                      centeredSlides: true,
                      centeredSlidesBounds: true,
                    
                    },
                  }}
                className="mySwiper"
            >
                <SwiperSlide>

                    <div className="card bg-[#fff] w-96 shadow-sm sm:mx-auto sm:w-full">
                        <div className='ml-5'>
                            <img
                                className='h-[52px] w-[52px] border border-[#DE9EBA] rounded-lg p-2'
                                src={slide1aiml}
                                alt="AI"
                            />
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-semibold text-gray-700">
                                AI & Machine Learning
                            </h2>
                            <ol className='text-left text-[#718096] list-decimal list-inside  '>
                                <li>Natural Language Processing (NLP)</li>
                                <li>Computer Vision & OCR</li>
                                <li>Predictive Analytics & Forecasting</li>
                                <li>AI Model Integration & Deployment</li>
                            </ol>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="card bg-[#fff] w-96 shadow-sm">
                        <div className='ml-5'>
                            <img
                                className='max-h-16 max-w-16 border border-[#DE9EBA] rounded-lg p-2 object-contain'
                                src={slide2uiux}
                                alt="AI"
                            />
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-semibold text-gray-700">
                                UI/UX & Digital Design
                            </h2>
                            <ol className='text-left text-[#718096] list-decimal list-inside  '>
                                <li>User-centric mobile & web design</li>
                                <li>Wireframing & prototyping (Figma, Adobe XD)</li>
                                <li>Brand identity & visual storytelling</li>
                                <li>Accessibility-first interfaces</li>
                            </ol>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="card bg-[#fff] w-96 shadow-sm">
                        <div className='ml-5'>
                            <img
                                className='max-h-16 max-w-16 border border-[#DE9EBA] rounded-lg p-2 object-contain'
                                src={slide4data}
                                alt="AI"
                            />
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-semibold text-gray-700">
                                Data & Intelligence
                            </h2>
                            <ol className='text-left text-[#718096] list-decimal list-inside  '>
                                <li>Visualization: Power BI, Tableau, Grafana</li>
                                <li>Data management: PIM, MDM</li>
                                <li>Big Data, AI, ML, Automation</li>
                                <li>Analytics & Smart Bots</li>
                            </ol>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="card bg-[#fff] w-96 shadow-sm">
                        <div className='ml-5'>
                            <img
                                className='max-h-16 max-w-16 border border-[#DE9EBA] rounded-lg p-2 object-contain'
                                src={slide3cyber}
                                alt="Cybersecurity"
                            />
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-semibold text-gray-700">
                            Cybersecurity
                            </h2>
                            <ol className='text-left text-[#718096] list-decimal list-inside  '>
                               <li>End-to-end security: network, cloud, app, data</li>
                               <li>Risk assessments, compliance, & governance</li>
                               <li>Threat defense: malware, ransomware, phishing</li>
                            </ol>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="card bg-[#fff] w-96 shadow-sm">
                        <div className='ml-5'>
                            <img
                                className='max-h-16 max-w-16 border border-[#DE9EBA] rounded-lg p-2 object-contain'
                                src={slide6adm}
                                alt="AI"
                            />
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-semibold text-gray-700 text-left">
                            Application Development & Management
                            </h2>
                            <ol className='text-left text-[#718096] list-decimal list-inside  '>
                                <li>Custom cloud software & mobile apps</li>
                                <li>Legacy modernization &amp; agile consulting</li>
                                <li>Smart home integrations & digital interfaces</li>
                                
                            </ol>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="card bg-[#fff] w-96 shadow-sm">
                        <div className='ml-5'>
                            <img
                                className='max-h-16 max-w-16 border border-[#DE9EBA] rounded-lg p-2 object-contain'
                                src={slide5cloud}
                                alt="AI"
                            />
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-semibold text-gray-700">
                                Cloud Services
                            </h2>
                            <ol className='text-left text-[#718096] list-decimal list-inside  '>
                              <li>Public, private, hybrid & on-premise solutions</li>
                              <li>AWS, Azure, GCP, Oracle expertise</li>
                              <li>CI/CD, Terraform, Ansible automation</li>
                              <li>SaaS, IaaS, PaaS platforms</li>
                                
                            </ol>

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default ServicesArea;