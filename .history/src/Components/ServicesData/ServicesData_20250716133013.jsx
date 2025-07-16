import React from 'react';
const servicesData = [
  {
    title: 'Staff Augmentation',
    description:
      'Looking for top-tier IT staff augmentation services? We offer comprehensive solutions and highly skilled personnel to help you grow and strengthen your team.',
  },
  {
    title: 'Digital Product Engineering',
    description:
      'Design, develop, and deploy robust software platforms, mobile apps, and enterprise systems tailored to modern business needs.',
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Streamline your infrastructure, reduce downtime, and deploy with confidence using modern cloud-native architectures and DevOps practices.',
  },
  {
    title: 'UI/UX Design',
    description:
      'Human-centered design to deliver intuitive, engaging digital experiences that delight users and meet business goals.',
  },
  {
    title: 'AI & Data Engineering',
    description:
      'From predictive analytics to custom AI models — we help businesses unlock the power of their data.',
  },
  {
    title: 'Custom Software Development',
    description:
      'Whether it\'s B2B platforms, internal tools, or customer-facing portals, we build scalable and secure custom software.',
  },
  {
    title: 'Emerging Tech (IoT, Blockchain, AR/VR)',
    description:
      'Experiment and innovate with the latest technology to future-proof your business.',
  },
  {
    title: 'Digital Survey',
    description: 'Gather actionable insights through modern, user-friendly digital survey tools.',
  },
];

const ServicesData = () => {
    return (
        <div className="service-area grid md:grid-cols-3 grid-cols-1 px-10 my-10 gap-5">
            {servicesData.map((service, idx) => (
                <div key={idx} className="service-card hover-card bg-[#fff] shadow-sm rounded-lg">
                    <div>
                        <img
                            className="h-[52px] w-[52px] border border-[#DE9EBA] rounded-lg p-2 object-contain"
                            src={service.image}
                            alt={service.title}
                        />
                    </div>
                    <div>
                        <h2 className="card-title font-semibold text-gray-700 text-left">{service.title}</h2>
                        <ol className="text-left text-[#718096] list-decimal list-inside">
                            {service.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesData;