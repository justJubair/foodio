import footerImg from "../../assets/Image2.png";

// icons
import { FaArrowRightLong } from "react-icons/fa6";
const Footer = () => {
  return (
    // main container
    <div className="flex items-start justify-evenly bg-gradient-to-b from-orange-400 to-yellow-500">
      {/* Search input and social logos */}
      <div className="space-y-16 mt-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter Your Email.."
            className="input input-bordered rounded-2xl w-full lg:w-[450px]"
          />
          <button className="btn btn-sm bg-orange-600 text-white absolute right-3 top-2 hover:bg-orange-500">
            Subscribe
            <FaArrowRightLong />
          </button>
        </div>

        {/* logo and social icons */}
        <div>
          <h2 className="text-2xl font-bold cursor-pointer">
            foo<span className="text-orange-700">d</span>io
          </h2>

          <p className="font-medium">
            Copyright &copy; foodio. All Rights Reserved
          </p>
        </div>
      </div>

      {/* image */}
      <img className="w-80" src={footerImg} alt="" />
    </div>
  );
};
export default Footer;
