// icons
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
        {/* main container */}
      <div className="flex items-center justify-between my-8 bg-base-100">
        {/* logo */}
        <div className="">
          <a className="btn btn-ghost text-xl">foodio</a>
        </div>
        {/* search box */}
        <div className="">
          <div className="form-control">
          <CiSearch/>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          
        </div>

        {/* avatar */}
        <img className="w-14" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_kSSoomJ9hiFXmiF2RdZlwx72Y23XsT6iwQ&usqp=CAU" alt="logo" />
      </div>
    </div>
  );
};
export default Navbar;
