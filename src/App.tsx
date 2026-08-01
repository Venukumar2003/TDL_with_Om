import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Offers from "./components/Offers/Offers";
import BrowseCategories from "./components/Categories/BrowseCategories";
import Testimonials from "./components/Testimonials/Testimonials";
import Newsletter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";


import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";

import {Routes,Route} from "react-router-dom"


function Home(){
  return (
    <>
    
    <Navbar />
      <Hero />
      <Offers />
      <BrowseCategories />
      <Testimonials />
      <Newsletter />
      <Footer />
</>
  )
}

function App() {
  return (
    <div>

    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>



    </div>
  );
}

export default App;