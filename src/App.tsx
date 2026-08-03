import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Testimonials from "./components/Testimonials/Testimonials";
import Newsletter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import MainComponent from "./components/MainComponent/MainComponent";


import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";

import {Routes,Route} from "react-router-dom"


function Home(){
  return (
    <>
    <div className="bg-gradient-to-b from-white via-violet-50 to-white">


   
    <Navbar />
      <Hero />
      <MainComponent />
      <Testimonials />
      <Newsletter />
      <Footer />
       </div>
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