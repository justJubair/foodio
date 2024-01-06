/* eslint-disable react/prop-types */
import axios from "axios";
import Loader from "../Loader/Loader";
import { useForm } from "react-hook-form";
// Icons
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`
const PopularFoodSlide = ({ title, foods, setFoods, sliderId }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
        const imageFile = {image: data.image[0]}
        const itemId = Math.ceil(Math.random()*99990)
        const name = data.name;
        const dbResponse = await axios.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
        if(dbResponse?.data?.data?.display_url){

            const newItem = {Id: itemId, Name: name, ImageUrl: dbResponse?.data?.data?.display_url}
            setFoods([...foods, newItem])
            toast.success(`${name} has been added`)
            reset()

        }
       
        
  };


  const sliderLeft = () => {
    let slider = document.getElementById("slider"+ sliderId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    let slider = document.getElementById("slider"+ sliderId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  if (foods.length < 0) {
    return <Loader />;
  }
  return (
    <div className="my-28">
      {/* slider arrows */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex items-center gap-2">
          <button
            className="btn btn-sm text-orange-500 mr-5"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Add More
          </button>
          {/* modal content */}
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h2 className="text-center font-medium mb-6 text-lg text-orange-500">
                Add new item to your kitchen
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <label htmlFor="image" className="flex flex-col gap-2">
                  <span>Upload the food image</span>
                  <input
                    type="file"
                    {...register("image", {required:true})}
                    className="file-input file-input-bordered w-full max-w-xs mt-1"
                  />
                  {errors.image && <span className="font-medium text-red-600">Image is required</span>}
                </label>
                <label htmlFor="food name" className="flex flex-col gap-2">
                  <input
                    type="text"
                    {...register("name", {required:true})}
                    placeholder="Food name"
                    className="input input-bordered w-full max-w-xs"
                  />
                   {errors.image && <span className="font-medium text-red-600">Name is required</span>}
                </label>
                    <button type="submit" className="btn btn-block bg-orange-500 text-white hover:bg-orange-600">Add Instantly</button>
              </form>
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
        id={`slider` + sliderId}
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
