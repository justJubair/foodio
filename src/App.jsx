import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"



function App() {
  

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4">
      {/* Navbar */}
      <Navbar/>

      {/* banner */}
      <Banner/>
      </div>
      
     
    </>
  )
}

export default App
