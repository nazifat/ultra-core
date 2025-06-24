

import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import pythonImg from '../../../assets/images/tech/python.png';
import railsImg from '../../../assets/images/tech/rails.png';
import Java from '../../../assets/images/tech/Java.png';
import mysql from '../../../assets/images/tech/mysql.png';
import node from '../../../assets/images/tech/node.png';
import dotNet from '../../../assets/images/tech/dotNet.png';
import Go from '../../../assets/images/tech/Go.png';
import mongo from '../../../assets/images/tech/mongo.png';
import react from '../../../assets/images/tech/react.svg';
import angular from '../../../assets/images/tech/angular.svg';
import vue from '../../../assets/images/tech/vue.svg';
import postgresql from '../../../assets/images/tech/postgresql.svg';
import wordpress from '../../../assets/images/tech/wordpress.svg';
import drupal from '../../../assets/images/tech/drupal.svg';
import amazon from '../../../assets/images/tech/amazon.svg';
import azure from '../../../assets/images/tech/azure.svg';
import googleCloud from '../../../assets/images/tech/googleCloud.svg';
import docker from '../../../assets/images/tech/docker.svg';
import jetkins from '../../../assets/images/tech/jenkins.svg';
import kubernetes from '../../../assets/images/tech/kubernetes.svg';


const TechStack = () => {
    return (
        <div className='py-10'>
            <CustomHeader heading="Our" subHeading="Tech Stack"></CustomHeader>

            {/* name of each tab group should be unique */}
            <div className='py-10'>
                <div className="tabs tabs-border  ">
                    <input type="radio" name="my_tabs_2" className="tab border-purple-800 text-center" aria-label="Backend" />

                    <div className="tab-content p-10">




                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
                            <img src={pythonImg} alt="Python" className="w-20" />
                            <img src={Go} alt="Go" className="w-20" />
                            <img src={Java} alt="Java" className="w-20" />
                            <img src={node} alt="Node.js" className="w-20" />
                            <img src={mysql} alt="MySQL" className="w-20" />
                            <img src={railsImg} alt="Rails" className="w-20" />
                            <img src={mongo} alt="MongoDB" className="w-20" />
                            <img src={dotNet} alt=".NET" className="w-20" />
                        </div>
                    </div>



                    <input type="radio" name="my_tabs_2" className="tab border-purple-300 text-center " aria-label="Frontend" defaultChecked />
                    <div className="tab-content   p-10">

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
                            <img src={pythonImg} alt="Python" className="w-20" />
                            <img src={Go} alt="Go" className="w-20" />
                            <img src={Java} alt="Java" className="w-20" />
                            <img src={node} alt="Node.js" className="w-20" />
                            <img src={mysql} alt="MySQL" className="w-20" />
                            <img src={railsImg} alt="Rails" className="w-20" />
                            <img src={mongo} alt="MongoDB" className="w-20" />
                            <img src={dotNet} alt=".NET" className="w-20" />
                        </div>

                    </div>

                    <input type="radio" name="my_tabs_2" className="tab border-purple-300" aria-label="Databases" />

                    <div className="tab-content p-10">

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
                            <img src={pythonImg} alt="Python" className="w-20" />
                            <img src={Go} alt="Go" className="w-20" />
                            <img src={Java} alt="Java" className="w-20" />
                            <img src={node} alt="Node.js" className="w-20" />
                            <img src={mysql} alt="MySQL" className="w-20" />
                            <img src={railsImg} alt="Rails" className="w-20" />
                            <img src={mongo} alt="MongoDB" className="w-20" />
                            <img src={dotNet} alt=".NET" className="w-20" />
                        </div>

                    </div>
                    <input type="radio" name="my_tabs_2" className="tab border-purple-300" aria-label="CMS" />

                    <div className="tab-content p-10">

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
                            <img src={pythonImg} alt="Python" className="w-20" />
                            <img src={Go} alt="Go" className="w-20" />
                            <img src={Java} alt="Java" className="w-20" />
                            <img src={node} alt="Node.js" className="w-20" />
                            <img src={mysql} alt="MySQL" className="w-20" />
                            <img src={railsImg} alt="Rails" className="w-20" />
                            <img src={mongo} alt="MongoDB" className="w-20" />
                            <img src={dotNet} alt=".NET" className="w-20" />
                        </div>

                    </div>
                    <input type="radio" name="my_tabs_2" className="tab  text-base" aria-label="Cloud Testing" />

                    <div className="tab-content p-10">

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
                            <img src={pythonImg} alt="Python" className="w-20" />
                            <img src={Go} alt="Go" className="w-20" />
                            <img src={Java} alt="Java" className="w-20" />
                            <img src={node} alt="Node.js" className="w-20" />
                            <img src={mysql} alt="MySQL" className="w-20" />
                            <img src={railsImg} alt="Rails" className="w-20" />
                            <img src={mongo} alt="MongoDB" className="w-20" />
                            <img src={dotNet} alt=".NET" className="w-20" />
                        </div>

                    </div>
                    <input type="radio" name="my_tabs_2" className="tab  ext-base" aria-label="DevOps" />

                    <div className="tab-content p-10">

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
                            <img src={pythonImg} alt="Python" className="w-20" />
                            <img src={Go} alt="Go" className="w-20" />
                            <img src={Java} alt="Java" className="w-20" />
                            <img src={node} alt="Node.js" className="w-20" />
                            <img src={mysql} alt="MySQL" className="w-20" />
                            <img src={railsImg} alt="Rails" className="w-20" />
                            <img src={mongo} alt="MongoDB" className="w-20" />
                            <img src={dotNet} alt=".NET" className="w-20" />
                        </div>

                    </div>


                </div>
            </div>

        </div >
    );
};

export default TechStack;