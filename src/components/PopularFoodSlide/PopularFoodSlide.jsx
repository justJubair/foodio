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
    <div>
      <h3 className="text-xl font-bold">Popular</h3>

      {/* popular food row */}
      <MdChevronLeft onClick={sliderLeft} size={40} />
      <MdChevronRight onClick={sliderRight} size={40}/>
      <div
        id="populer"
        className="w-full h-full whitespace-nowrap overflow-x-scroll relative space-x-4 scrollbar-hide scroll-smooth"
      >
        {foods?.map((food) => (
          <img
            key={food.Id}
            src={food?.ImageUrl}
            className="w-52 h-64 object-cover rounded-xl cursor-pointer relative inline-block"
          />
        ))}
      </div>
    </div>
  );
};
export default PopularFoodSlide;
