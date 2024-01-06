// images
import banner from "../../assets/Image1.png"
const Banner = () => {
    return(
        // main container
        <div className="flex items-center justify-center  bg-orange-400 rounded-3xl my-6">
             {/* text content */}
             <div className="lg:w-1/3 text-white space-y-3">
                <h1 className="lg:text-5xl font-medium lg:leading-tight">Deliver Food To Your Door Step</h1>
                <h3 className="lg:text-2xl font-extralight">Authentic Food, Quick Service, Fast Delivery</h3>
             </div>
             {/* img */}
             <img className="lg:w-[500px]" src={banner} alt="" />
        </div>
    )}
export default Banner;