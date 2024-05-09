import { FaFacebook, FaTwitter, FaInstagram,FaWhatsapp, } from 'react-icons/fa';
function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <p className="mt-2">Email: info@example.com</p>
              <p>Phone: +1234567890</p>
            </div>
            <div className="text-center mb-4 lg:mb-0">
              <h3 className="text-xl font-bold">Quick Links</h3>
              <ul className="mt-2">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <h3 className="text-xl font-bold">Connect With Us</h3>
              <div className="mt-2 flex justify-center lg:justify-end">
                <a href="#" className="text-white mr-4 hover:text-gray-400 transition duration-300"><i className="fab fa-facebook-f"><FaFacebook/></i></a>
                <a href="#" className="text-white mr-4 hover:text-gray-400 transition duration-300"><i className="fab fa-twitter"><FaTwitter/></i></a>
                <a href="#" className="text-white mr-4 hover:text-gray-400 transition duration-300"><i className="fab fa-instagram"><FaInstagram/></i></a>
                <a href="#" className="text-white mr-4 hover:text-gray-400 transition duration-300"><i className="fab fa-linkedin-in"><FaWhatsapp/></i></a>
              </div>
            </div>
          </div>
          <hr className="border-gray-600 my-6" />
          <div className="text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  