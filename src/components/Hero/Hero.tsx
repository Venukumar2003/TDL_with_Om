import HeroContent from "./HeroContent";
import heroImage from "../../assets/heroImage.jpeg"

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-purple-600 to-indigo-700 rounded-[40px]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-start gap-10 px-3 py-20 m-5 lg:flex-row">


        <div className="flex justify-center">

          <div className="flex object-fit w-95 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">

            <img src={heroImage} alt="HeroImage" className="text-xl font-semibold text-white rounded-3xl hover:scale-105 transition duration-500 cursor-pointer " />


          </div>

        </div>


        <HeroContent />



      </div>
    </section>
  );
};

export default Hero;