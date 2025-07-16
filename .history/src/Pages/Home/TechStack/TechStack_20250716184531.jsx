


import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
// (your image imports here)

const techStackData = {
    Backend: [
        { name: 'Node.js', img: "https://i.ibb.co.com/0jZjmt71/node.png" },
        { name: 'PHP', img: "https://i.ibb.co.com/twBWrfBm/PHP.png" },
        { name: 'MySQL', img: "https://i.ibb.co.com/gLxSf9bP/mysql.png" },
        { name: 'Java', img: "https://i.ibb.co.com/qYP0tR8L/Java.png" },
        { name: 'MongoDB', img: "https://i.ibb.co.com/q386WCZP/mongo.png" },
        { name: '.NET', img: "https://i.ibb.co/v4CgFRFb/dotNet.png" },
        { name: 'Python', img: "https://i.ibb.co.com/QjrfwQ3y/python.png" },
        { name: 'Rails', img: "https://i.ibb.co.com/j9N3kC93/rails.png" },
        { name: 'Go', img: "https://i.ibb.co.com/n8ZpC5Jj/Go.png" },
    ],
    Frontend: [
        { name: 'React', img: "https://i.ibb.co/9mwWC2Qq/React.webp" },
        { name: 'Angular', img: "https://i.ibb.co/nqDMgnxG/Angular-full-color-logo-svg.png" },
        { name: 'Vue', img: "https://i.ibb.co/6JrqskDv/Vue-1.png" },
    ],
    Databases: [
        { name: 'PostgreSQL', img: "https://i.ibb.co/RTDscBcb/png-transparent-postgresql-logo-computer-software-database-open-source-s-text-head-snout.png" },
        { name: 'MongoDB', img: "https://i.ibb.co.com/q386WCZP/mongo.png" },
        { name: 'MySQL', img: "https://i.ibb.co.com/gLxSf9bP/mysql.png" },
    ],
    CMS: [
        { name: 'WordPress', img: "https://i.ibb.co/5g5QYvL6/images.png" },
        { name: 'Drupal', img: "https://i.ibb.co/vvxRWYPq/drupal-logo-png-seeklogo-43883.png" },
    ],
    'Cloud Testing': [
        { name: 'AWS', img: "https://i.ibb.co/ccXR0sgV/amazon-logo-on-transparent-background-free-vector.jpg" },
        { name: 'Azure', img: "https://i.ibb.co/yFNGJQth/Microsoft-Azure-Logo-svg.png" },
        { name: 'Google Cloud', img: "https://i.ibb.co/hJjPm7V2/google-cloud-logo-png-seeklogo-336116.png" },
    ],
    DevOps: [
        { name: 'Docker', img: "https://i.ibb.co/23BcZcyh/97-Docker-logo-logos-512.webp" },
        { name: 'Kubernetes', img: "https://i.ibb.co/1ftsxnfK/Kubernetes-logo-without-workmark-svg.png" },
        { name: 'Jenkins', img: "https://i.ibb.co/VYHW0w3L/Jenkins-logo-svg.png" },
    ],
};

const TechStack = () => {
    const categories = Object.keys(techStackData);

    return (
        <div className='lg:py-10'>
            <CustomHeader heading="Our" subHeading="Tech Stack" />

            <div className='lg:py-10'>
                <div className="tabs tabs-border">
                    {categories.map((category, index) => (
                        <React.Fragment key={category}>
                            <input
                                type="radio"
                                name="tech_tabs"
                                className="tab text-base"
                                aria-label={category}
                                defaultChecked={index === 0}
                            />
                            <div className="tab-content p-10">
                                <div className="flex flex-wrap justify-center gap-10">
                                    {techStackData[category].map(({ name, img }) => (
                                        <img key={name} src={img} alt={name} title={name} className="h-12 w-auto" />
                                    ))}
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
