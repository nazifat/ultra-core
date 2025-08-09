// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const servicesData = [
    {
        title: 'Custom Software Development',
        image: 'https://i.ibb.co.com/Z6r8QtGn/aiml.png',
        points: [
            'We create tailored software solutions to meet unique business needs, enhancing efficiency, scalability, and performance.',
        ],
    },
    {
        title: 'Web Application Design',
        image: 'https://i.ibb.co.com/8Lm3b3QH/data.png',
        points: [
            'Design and develop responsive, user-friendly web apps optimized for performance, functionality, and seamless user experience.',
        ],
    },
    {
        title: 'Mobile App Solutions',
        image: 'https://i.ibb.co.com/4ZFPnfhK/cloud.png',
        points: [
            'Build cross-platform mobile applications delivering smooth performance, intuitive design, and engaging customer experiences.',
        ],
    },
    {
        title: 'UI/UX Design',
        image: 'https://i.ibb.co.com/BK6pc359/uiux.png',
        points: [
            'Human-centered design to deliver intuitive, engaging digital experiences that delight users and meet business goals.',
        ],
    },
    {
        title: 'AI & Data Engineering',
        image: 'https://i.ibb.co.com/zHbNkDRR/ADM.png',
        points: [
            'From predictive analytics to custom AI models — we help businesses unlock the power of their data.',
        ],
    },
    {
        title: 'Enterprise Resource Planning (ERP)',
        image: 'https://i.ibb.co.com/4ZFPnfhK/cloud.png',
        points: [
            "Develop and implement ERP solutions for efficient management of finance, operations, inventory, and human resources.",
        ],
    },
    {
        title: 'Cybersecurity Solutions',
        image: 'https://i.ibb.co.com/Z6r8QtGn/aiml.png',
        points: [
            'Protect digital assets through security audits, penetration testing, encryption, and proactive threat monitoring.',
        ],
    },
    {
        title: 'API Development & Integration',
        image: 'https://i.ibb.co.com/BK6pc359/uiux.png',
        points: [
            'Design and integrate robust APIs enabling secure, smooth communication between different systems, apps, and platforms.',
        ],
    },
];

const ServicesArea = () => {
    return (
        <div className="bg-[#F9F9FF] w-full lg:p-20 lg:pt-10 pt-5">
            <h2 className="lg:text-3xl text-xl text-[#2D3748] lg:mb-10 text-center font-bold">
                Services we offer
            </h2>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                breakpoints={{
                    1024: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    0: {
                        slidesPerView: 1,
                        centeredSlides: true,
                        centeredSlidesBounds: true,
                    },
                }}
                className="mySwiper"
            >
                {servicesData.map((service, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="service-card bg-white shadow-sm rounded-lg p-4">
                            <div>
                                <img
                                    className="h-[52px] w-[52px] border border-[#DE9EBA] rounded-lg p-2 object-contain"
                                    src={service.image}
                                    alt={service.title}
                                />
                            </div>
                            <div>
                                <h2 className="card-title font-semibold text-gray-700 text-left mt-2">
                                    {service.title}
                                </h2>
                                <ul className="text-left text-[#718096] list-inside mt-2">
                                    {service.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ServicesArea;
