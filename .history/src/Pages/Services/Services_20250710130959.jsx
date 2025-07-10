import slide1aiml from '../../../assets/images/aiml.png'
import slide2uiux from '../../../assets/images/uiux.png'
import slide3cyber from '../../../assets/images/cyber.png'
import slide4data from '../../../assets/images/data.png'
import slide5cloud from '../../../assets/images/cloud.png'
import slide6adm from '../../../assets/images/ADM.png'
const Services = () => {
    return (
        <div className='h-[300px] items-center flex justify-center'>



            <div className='service-area'>
                {/* service--1 */}
                <div className=" service-card bg-[#fff] shadow-sm  rounded-lg">
                    <div className=''>
                        <img
                            className='h-[52px] w-[52px] border border-[#DE9EBA] rounded-lg p-2'
                            src={slide1aiml}
                            alt="AI"
                        />
                    </div>

                    <div className="">
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


                {/* service--2 */}
                <div className="service-card bg-[#fff]  shadow-sm">
                    <div className=''>
                        <img
                            className='max-h-16 max-w-16 border border-[#DE9EBA] rounded-lg p-2 object-contain'
                            src={slide2uiux}
                            alt="AI"
                        />
                    </div>

                    <div className="">
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


                {/* service--3 */}
                <div className="service-card bg-[#fff] shadow-sm">
                    <div className=''>
                        <img
                            className='max-h-16 max-w-16 border border-[#DE9EBA] rounded-lg p-2 object-contain'
                            src={slide4data}
                            alt="AI"
                        />
                    </div>

                    <div className="">
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

                {/* service--4 */}
                <div className="service-card bg-[#fff]  shadow-sm">
                    <div className=''>
                        <img
                            className='max-h-16 max-w-16 border border-[#DE9EBA] rounded-lg p-2 object-contain'
                            src={slide3cyber}
                            alt="Cybersecurity"
                        />
                    </div>

                    <div className="">
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
                {/* service--5 */}
                <div className="service-card bg-[#fff] shadow-sm">
                    <div className=''>
                        <img
                            className='max-h-16 max-w-16 border border-[#DE9EBA] rounded-lg p-2 object-contain'
                            src={slide6adm}
                            alt="AI"
                        />
                    </div>

                    <div className="">
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
                {/* service--6 */}
                <div className="service-card bg-[#fff] shadow-sm">
                    <div className=''>
                        <img
                            className='max-h-16 max-w-16 border border-[#DE9EBA] rounded-lg p-2 object-contain'
                            src={slide5cloud}
                            alt="AI"
                        />
                    </div>

                    <div className="">
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




            </div>



        </div>
    );
};

export default Services;