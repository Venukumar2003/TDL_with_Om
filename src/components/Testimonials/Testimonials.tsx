import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./TestimonialData";
import Blogs from "../Blogs/Blogs";

const Testimonials = () => {
  return (
    <section id="testimonial" className="mx-auto mt-10 max-w-7xl px-5">

      <div className="flex flex-col gap-6 lg:flex-row">

        <div className="w-full lg:w-[60%]">

          <div className="mb-4 flex items-center justify-between">

            <h2 className="text-2xl font-bold text-violet-900">
              What Our Students Say
            </h2>

            <button className="text-sm font-semibold text-violet-700 hover:text-violet-900 hover:bg-purple-200 rounded-lg p-1 cursor-pointer">
              View All
            </button>

          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                {...testimonial}
              />
            ))}

          </div>

        </div>

        <div className="w-full lg:w-[40%]">

          <Blogs />

        </div>

      </div>

    </section>
  );
};

export default Testimonials;