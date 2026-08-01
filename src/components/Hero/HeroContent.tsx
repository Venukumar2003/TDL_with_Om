import { FaArrowRight } from "react-icons/fa";

const HeroContent = () => {
  return (
    <div className="max-w-xl text-start lg:text-left rounded-4xl py-2">

      <h1 className="inline-block text-4xl font-bold leading-tight text-yellow-300">
        TDL with Om
      </h1>

      <h1 className="mt-5 text-4xl font-bold leading-tight text-white">
       Learn. Practice. Grow.
      </h1>

      <p className="mt-5 text-lg text-violet-100">
       Welcome to TDL with Om - your trusted platform to learn Tally, GST, Excel, Accounting, and more with practical examples and easy explanations.
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-4 lg:justify-start">

        <button className="flex items-center gap-2 rounded-full bg-yellow-300 px-4 py-2 font-semibold transition hover:scale-105 cursor-pointer">
          Explore Courses
          <FaArrowRight size={18} />
        </button>

        <button className="rounded-full border border-white px-4 py-2 font-semibold text-white transition cursor-pointer hover:scale-105 hover:bg-white hover:text-violet-700">
          Free Resources
        </button>

      </div>

    </div>
  );
};

export default HeroContent;