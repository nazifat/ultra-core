

// import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
// import pythonImg from '../../../assets/images/tech/python.png';
// import php from '../../../assets/images/tech/php.png';
// import railsImg from '../../../assets/images/tech/rails.png';
// import Java from '../../../assets/images/tech/Java.png';
// import mysql from '../../../assets/images/tech/mysql.png';
// import node from '../../../assets/images/tech/node.png';
// import dotNet from '../../../assets/images/tech/dotNet.png';
// import Go from '../../../assets/images/tech/Go.png';
// import mongo from '../../../assets/images/tech/mongo.png';
// import react from '../../../assets/images/tech/react.svg';
// import angular from '../../../assets/images/tech/angular.svg';
// import vue from '../../../assets/images/tech/vue.svg';
// import postgresql from '../../../assets/images/tech/postgresql.svg';
// import wordpress from '../../../assets/images/tech/wordpress.svg';
// import drupal from '../../../assets/images/tech/drupal.svg';
// import amazon from '../../../assets/images/tech/amazon.svg';
// import azure from '../../../assets/images/tech/azure.svg';
// import googleCloud from '../../../assets/images/tech/googleCloud.svg';
// import docker from '../../../assets/images/tech/docker.svg';
// import jetkins from '../../../assets/images/tech/jenkins.svg';
// import kubernetes from '../../../assets/images/tech/kubernetes.svg';


// const TechStack = () => {
//     return (
//         <div className='lg:py-10'>
//             <CustomHeader heading="Our" subHeading="Tech Stack"></CustomHeader>

//             {/* name of each tab group should be unique */}
//             <div className='lg:py-10'>
//                 <div className="tabs tabs-border  ">
//                     <input type="radio" name="my_tabs_2" className="tab text-base text-[#1A202C]" aria-label="Backend" defaultChecked />

//                     <div className="tab-content p-10">
//                         <div className="space-y-10 items-center ">
//                             <div className='lg:flex grid grid-cols-2 justify-center gap-5 lg:gap-20'>
//                                 <img src={node} alt="Node.js" className="" />
//                                 <img src={php} alt="Go" className="" />
//                                 <img src={mysql} alt=".NET" className="" />
//                                 <img src={Java} alt="Java" className="" />
//                                 <img src={mongo} alt=".NET" className="" />
//                             </div>

//                             <div className='lg:flex grid grid-cols-2 justify-center gap-20'>
//                                 <img src={dotNet} alt=".NET" className="" />
//                                 <img src={pythonImg} alt="Python" className="" />
//                                 <img src={railsImg} alt=".NET" className="" />
//                                 <img src={Go} alt=".NET" className="" />
//                             </div>
//                         </div>
//                     </div>

//                     <input type="radio" name="my_tabs_2" className="tab text-base " aria-label="Frontend" />
//                     <div className="tab-content  p-10">
//                         <div className="flex gap-20 items-center justify-center">
//                             <img src={react} alt="Python" className="" />
//                             <img src={angular} alt="Go" className="" />
//                             <img src={vue} alt="Java" className="" />
//                         </div>
//                     </div>

//                     <input type="radio" name="my_tabs_2" className="tab text-base" aria-label="Databases" />

//                     <div className="tab-content p-10">

//                         <div className="lg:flex grid  gap-5 lg:gap-20 lg:items-center lg:justify-center justify-items-center ">
//                             <img src={postgresql} alt="Java" className="" />

//                             <img src={mongo} alt="Python" className="" />
//                             <img src={mysql} alt="Go" className="" />

//                         </div>

//                     </div>
//                     <input type="radio" name="my_tabs_2" className="tab text-base" aria-label="CMS" />

//                     <div className="tab-content p-10">

//                         <div className="flex gap-20 items-center justify-center">
//                             <img src={wordpress} alt="Python" className="" />
//                             <img src={drupal} alt="Go" className="" />

//                         </div>

//                     </div>
//                     <input type="radio" name="my_tabs_2" className="tab  text-base" aria-label="Cloud Testing" />

//                     <div className="tab-content p-10">

//                         <div className="flex gap-20 items-center justify-center">
//                             <img src={amazon} alt="Python" className="" />
//                             <img src={azure} alt="Go" className="" />
//                             <img src={googleCloud} alt="Java" className="" />

//                         </div>

//                     </div>
//                     <input type="radio" name="my_tabs_2" className="tab  text-base" aria-label="DevOps" />

//                     <div className="tab-content p-10">

//                         <div className="flex gap-20 items-center justify-center">
//                             <img src={docker} alt="Python" className="" />
//                             <img src={kubernetes} alt="Go" className="" />
//                             <img src={jetkins} alt="Java" className="" />

//                         </div>

//                     </div>


//                 </div>
//             </div>

//         </div >
//     );
// };

// export default TechStack;


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
        { name: '.NET', img: dotNet },
        { name: 'Python', img: "https://i.ibb.co.com/QjrfwQ3y/python.png" },
        { name: 'Rails', img: "https://i.ibb.co.com/j9N3kC93/rails.png" },
        { name: 'Go', img: "https://i.ibb.co.com/n8ZpC5Jj/Go.png" },
    ],
    Frontend: [
        { name: 'React', img: react },
        { name: 'Angular', img: angular },
        { name: 'Vue', img: vue },
    ],
    Databases: [
        { name: 'PostgreSQL', img: postgresql },
        { name: 'MongoDB', img: mongo },
        { name: 'MySQL', img: mysql },
    ],
    CMS: [
        { name: 'WordPress', img: wordpress },
        { name: 'Drupal', img: drupal },
    ],
    'Cloud Testing': [
        { name: 'AWS', img: amazon },
        { name: 'Azure', img: azure },
        { name: 'Google Cloud', img: googleCloud },
    ],
    DevOps: [
        { name: 'Docker', img: docker },
        { name: 'Kubernetes', img: kubernetes },
        { name: 'Jenkins', img: jetkins },
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
