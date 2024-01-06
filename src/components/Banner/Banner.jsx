// images
import banner from "../../assets/Image1.png"
const Banner = () => {
    return(
        // main container
        <div className="flex flex-col items-center justify-center  bg-gradient-to-b from-orange-400 to-yellow-500 rounded-3xl my-6 pt-4 px-4 lg:px-0 md:flex-row mb-16 lg:mb-24">
             {/* text content */}
             <div className="w-full lg:w-1/3 text-white space-y-3 md:text-start">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium lg:leading-tight">Deliver Food To Your Door Step</h1>
                <h3 className="text-xl lg:text-2xl font-extralight text-gray-200">Authentic Food, Quick Service, Fast Delivery</h3>
             </div>
             {/* img */}
             <img className="w-full md:w-96 lg:w-[500px]" src={banner} alt="" />
        </div>
    )}
export default Banner;