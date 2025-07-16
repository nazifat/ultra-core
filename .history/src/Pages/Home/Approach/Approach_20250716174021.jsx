import React from 'react';
import approach1 from '../../../assets/images/approach1.png';
import approach2 from '../../../assets/images/approach2.png';
import approach3 from '../../../assets/images/approach3.png';
import approach4 from '../../../assets/images/approach4.png';
import approach5 from '../../../assets/images/approach5.png';
import approach6 from '../../../assets/images/approach6.png';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import leftArrow from '../../../assets/images/leftArrow.png';
import rightArrow from '../../../assets/images/rightArrow.png';

// Approach card data
const approachData = [
  {
    id: 1,
    title: "UX Driven Engineering",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    image: "https://i.ibb.co.com/Nnfr9H7h/approach1.png",
    gradient: "from-[#29272E] to-[#27272E]",
  },
  {
    id: 2,
    title: "Developing Shared Understanding",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    image: "https://i.ibb.co.com/zVqh11nn/approach2.png",
    gradient: "from-[#68DBF2] to-[#509CF5]",
  },
  {
    id: 3,
    title: "Proven Experience and Expertise",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    image: "https://i.ibb.co.com/fVKzRD1w/approach3.png",
    gradient: "from-[#FF92AE] to-[#FF3D9A]",
  },
  {
    id: 4,
    title: "Security & Intellectual Property (IP)",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    image: "https://i.ibb.co.com/0WLTBgH/approach4.png",
    gradient: "from-[#67E9F1] to-[#24E795]",
  },
  {
    id: 5,
    title: "Code Reviews",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    image: "https://i.ibb.co.com/8gTvSNMt/approach5.png",
    gradient: "from-[#FFEF5E] to-[#F7936F]",
  },
  {
    id: 6,
    title: "Quality Assurance & Testing",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    image: approach6,
    gradient: "from-[#F76680] to-[#57007B]",
  },
];

const Approach = () => {
  return (
    <div className='bg-[#F7F7FA] lg:p-20'>
      <div className='relative'>
        <div className="w-5 h-5 hidden lg:block rounded-full bg-gradient-to-r from-[#F76680] to-[#57007B] absolute left-[30%] top-[6%] z-[10]"></div>
        <div className='hidden lg:block'>
          <img src={leftArrow} alt="" className='absolute left-[10%] top-[-120%]' />
          <img src={rightArrow} alt="" className='absolute right-[10%] top-[-120%]' />
        </div>
        <CustomHeader heading='Our design and' subHeading='development approach' />
      </div>

      <div className='mx-4 space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-5'>
        {approachData.map((item) => (
          <div key={item.id} className="bg-[#FAFAFA] border border-[#E7DAED] px-[5%] py-[10%] rounded-lg">
            <div className="flex gap-5 items-start">
              <div className={`flex-shrink-0 p-2 border rounded-lg bg-gradient-to-r ${item.gradient}`}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className='flex-1 text-left space-y-3'>
                <h2 className="card-title text-[#1A202C]">{item.title}</h2>
                <p className='text-[#4A5568]'>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approach;
