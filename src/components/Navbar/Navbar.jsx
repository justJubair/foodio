// icons
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  return (
    <>
      {/* main container */}
      <div className="flex items-center justify-between py-8 gap-4 md:gap-0">
        {/* logo */}

        <h2 className="text-3xl font-bold cursor-pointer">
          foo<span className="text-orange-600">d</span>io
        </h2>

        {/* search box */}
        <div className="flex items-center gap-2">
          <div className="form-control relative">
            <IoSearchOutline
              className="absolute bottom-3 left-2 text-orange-600"
              size={20}
            />
            <input
              type="text"
              placeholder="Search food..."
              className="input input-bordered w-full lg:w-[500px] pl-8"
            />
          </div>

          {/* dropdown menu */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1 uppercase">
              Menu
              <IoIosArrowDown size={20} className="hidden text-orange-500 ml-4 md:block" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="font-semibold hover:text-orange-500">
                <a>Home</a>
              </li>
              <li className="font-semibold hover:text-orange-500">
                <a>Details</a>
              </li>
              <li className="font-semibold hover:text-orange-500">
                <a>Category</a>
              </li>
              <li className="font-semibold hover:text-orange-500">
                <a>My Favourites</a>
              </li>
              <li className="font-semibold hover:text-orange-500">
                <a>Profile</a>
              </li>
              <li className="font-semibold hover:text-orange-500">
                <a>Log In/Sign Up</a>
              </li>
            </ul>
          </div>
        </div>

        {/* avatar */}
        {/* <img className="hidden w-14 md:block" src={avatar2} alt="logo" /> */}
        <RxAvatar size={45} className="hidden md:block cursor-pointer rounded-full p-2 text-white bg-orange-600"/>
      </div>
    </>
  );
};
export default Navbar;
