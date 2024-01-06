import Loader from "../Loader/Loader";
import { useForm } from "react-hook-form"
// Icons
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

/* eslint-disable react/prop-types */
const PopularFoodSlide = ({ foods }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
            console.log(data)
        }

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
          <button className="btn btn-sm text-orange-500 mr-5" onClick={()=>document.getElementById('my_modal_1').showModal()}>Add More</button>
          {/* modal content */}
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
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
