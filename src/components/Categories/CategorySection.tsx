import { IoChevronForward } from "react-icons/io5";
import CourseCard from "./CourseCard";

interface CategorySectionProps {
  title: string;
  courses: any[];
}

const CategorySection = ({ title, courses }: CategorySectionProps) => {
  return (
    <section className="mt-1">

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-xl font-bold text-violet-900">
          {title}
        </h2>

        <div className="flex items-center gap-4">

          <button className="text-sm font-semibold text-violet-700 cursor-pointer">
            View All
          </button>

          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 hover:bg-violet-700 hover:text-white cursor-pointer">
            <IoChevronForward />
          </button>

        </div>

      </div>

      <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">

        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}

      </div>

    </section>
  );
};

export default CategorySection;