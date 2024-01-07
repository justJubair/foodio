import footerImg from "../../assets/Image2.png";

// icons
import { FaArrowRightLong, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    // main container
    <div className="flex items-start justify-evenly bg-gradient-to-b from-orange-400 to-yellow-500 mt-32 md:mt-40 px-4 lg:px-0">
      {/* Search input and social logos */}
      <div className="space-y-16 mt-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter Your Email.."
            className="input input-bordered rounded-2xl w-full lg:w-[450px]"
          />
          <button className="btn btn-sm bg-orange-600 text-white absolute md:right-3 lg:right-16 top-2 hover:bg-orange-500">
            Subscribe
            <FaArrowRightLong />
          </button>
        </div>

        {/* logo and social icons */}
        <div className="flex items-end justify-between gap-20">
         <div>
         <h2 className="text-2xl font-bold cursor-pointer">
            foo<span className="text-orange-700">d</span>io
          </h2>

          <p className="font-medium">
            Copyright &copy; foodio. All Rights Reserved
          </p>
         </div>

         {/* icons */}
         <div className="flex items-center gap-4">
           
        
            <FaGoogle size={35} className="p-2 rounded-full bg-orange-100 text-orange-600"/>
            <FaTwitter size={35} className="p-2 rounded-full bg-orange-100 text-orange-600"/>
            <FaInstagram size={35} className="p-2 rounded-full bg-orange-100 text-orange-600"/>
           
         </div>
        </div>
      </div>

      {/* image */}
      <img className="hidden md:block w-80" src={footerImg} alt="" />
    </div>
  );
};
export default Footer;
