import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import FoodSlide from "./components/FoodSlide/FoodSlide";
import Loader from "./components/Loader/Loader";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/Footer";

function App() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/justJubair/foodio/main/public/data.json"
    )
      .then((res) => res.json())
      .then((data) => setFoods(data.Items));
  }, []);

  const recommendedItems = foods.filter((food) => food?.IsRecommended === true);
  const popularItems = foods.filter((food) => food?.IsPopular === true);

  if (foods.length < 0) {
    return <Loader />;
  }
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Navbar */}
        <Navbar />

        {/* banner */}
        <Banner />

        {/* Popular food slide */}
        <FoodSlide
          title="Popular"
          foods={popularItems}
          setFoods={setFoods}
          sliderId="1"
        />
        {/* Popular food slide */}
        <FoodSlide
          title="Recommended"
          foods={recommendedItems}
          setFoods={setFoods}
          sliderId="2"
        />
       
      </div>

      {/* Footer */}
      <Footer/>
      <Toaster />
    </>
  );
}

export default App;
