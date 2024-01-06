import Loader from "../Loader/Loader";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

/* eslint-disable react/prop-types */
const PopularFoodSlide = ({ foods }) => {
  const sliderLeft = () => {
    let slider = document.getElementById("populer");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    let slider = document.getElementById("populer");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  if (foods.length < 0) {
    return <Loader />;
  }
  return (
    <div className="my-28">
      {/* slider arrows */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Popular</h3>
        <div className="flex items-center gap-2">
            <button className="btn btn-sm text-orange-500 mr-5">Add More</button>
          <MdChevronLeft
            onClick={sliderLeft}
            size={35}
            className="cursor-pointer bg-gray-300 rounded-full"
          />
          <MdChevronRight
            onClick={sliderRight}
            size={35}
            className="cursor-pointer bg-gray-300 rounded-full"
          />
        </div>
      </div>
      {/* popular food row */}
      <div
        id="populer"
        className="w-full h-full whitespace-nowrap overflow-x-scroll relative space-x-4 scrollbar-hide scroll-smooth"
      >
        {foods?.map((food) => (
          <div key={food.Id} className="inline-block relative">
            <img
              src={food?.ImageUrl}
              className="w-52 h-64 object-cover rounded-xl cursor-pointer  "
            />
            <p className="text-center my-3 font-medium">{food?.Name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PopularFoodSlide;
