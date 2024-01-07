import footerImg from "../../assets/Image2.png";

const Footer = () => {
  return (
    // main container
    <div className="bg-gradient-to-b from-orange-400 to-yellow-500">
      {/* Search input and social logos */}
      <div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />

        {/* logo and social icons */}
        <div>
          <h2>foodio</h2>
          <p>Copyright &copy; foodio. All Rights Reserved</p>
        </div>
      </div>

      {/* image */}
      <img src={footerImg} alt="" />
    </div>
  );
};
export default Footer;
