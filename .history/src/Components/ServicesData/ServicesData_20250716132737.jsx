import React from 'react';
const servicesData = [
  {
    title: 'AI & Machine Learning',
    image: 'https://i.ibb.co.com/Z6r8QtGn/aiml.png',
    points: [
      'Natural Language Processing (NLP)',
      'Computer Vision & OCR',
      'Predictive Analytics & Forecasting',
      'AI Model Integration & Deployment',
    ],
  },
  {
    title: 'UI/UX & Digital Design',
    image: 'https://i.ibb.co.com/BK6pc359/uiux.png',
    points: [
      'User-centric mobile & web design',
      'Wireframing & prototyping (Figma, Adobe XD)',
      'Brand identity & visual storytelling',
      'Accessibility-first interfaces',
    ],
  },
  {
    title: 'Data & Intelligence',
    image: 'https://i.ibb.co.com/8Lm3b3QH/data.png',
    points: [
      'Visualization: Power BI, Tableau, Grafana',
      'Data management: PIM, MDM',
      'Big Data, AI, ML, Automation',
      'Analytics & Smart Bots',
    ],
  },
  {
    title: 'Cybersecurity',
    image: 'https://i.ibb.co.com/cKqS9P1P/cyber.png',
    points: [
      'End-to-end security: network, cloud, app, data',
      'Risk assessments, compliance, & governance',
      'Threat defense: malware, ransomware, phishing',
    ],
  },
  {
    title: 'Application Development & Management',
    image: 'https://i.ibb.co.com/zHbNkDRR/ADM.png',
    points: [
      'Custom cloud software & mobile apps',
      'Legacy modernization & agile consulting',
      'Smart home integrations & digital interfaces',
    ],
  },
  {
    title: 'Cloud Services',
    image: 'https://i.ibb.co.com/4ZFPnfhK/cloud.png',
    points: [
      'Public, private, hybrid & on-premise solutions',
      'AWS, Azure, GCP, Oracle expertise',
      'CI/CD, Terraform, Ansible automation',
      'SaaS, IaaS, PaaS platforms',
    ],
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