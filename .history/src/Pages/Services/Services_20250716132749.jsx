import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner';
import ServicesData from '../../Components/ServicesData/ServicesData';
import Testimonial from '../About/Testimonial/Testimonial';
import ContactForDetails from './ContactForDetails/ContactForDetails';



const Services = () => {
  return (
    <div>
      <HeaderBanner
        img="https://i.ibb.co/R4V90kv7/marvin-meyer-SYTO3xs06f-U-unsplash.jpg"
        title="Services"
      />

      <ServicesData></ServicesData>

      <ContactForDetails />
      <Testimonial />
    </div>
  );
};

export default Services;
