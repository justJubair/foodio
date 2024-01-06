import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import PopularFoodSlide from "./components/PopularFoodSlide/PopularFoodSlide";

function App() {
  const [foods, setFoods] = useState({})

  useEffect(()=>{
    fetch("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
    .then(res=> res.json())
    .then(data=> setFoods(data.Items))
  },[])
  console.log(foods)
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Navbar */}
        <Navbar />

        {/* banner */}
        <Banner />

        {/* Popular food slide */}
        <PopularFoodSlide />
      </div>
    </>
  );
}

export default App;
