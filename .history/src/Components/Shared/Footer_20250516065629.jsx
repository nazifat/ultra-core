import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal text-gray-700 text-neutral-content p-10">
                <nav>
                        <a href='/'> <img src={logo} alt="" /></a>
                    
                    <p>At our software company, we combine creativity and technology to deliver innovative solutions. Our collaborative team transforms bold ideas into impactful software that drives success for businesses and users alike
                    </p>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>



            </footer>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>

        </div>


    );
};

export default Footer;