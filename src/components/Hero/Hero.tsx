import HeroContent from "./HeroContent";
import heroImage from "../../assets/heroImage.jpeg"

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-violet-700 to-purple-600 rounded-4xl w-full">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-start gap-10 px-3 py-10 m-5 lg:flex-row">


        <div className="flex justify-center">

          <div className="flex object-fit w-95 items-center justify-center rounded-3xl bg-white/20">

            <img src={heroImage} alt="HeroImage" className="text-xl font-semibold text-white rounded-3xl" />


          </div>

        </div>


        <HeroContent />



      </div>
    </section>
  );
};

export default Hero;