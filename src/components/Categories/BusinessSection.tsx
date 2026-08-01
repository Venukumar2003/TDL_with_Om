import CategorySection from "./CategorySection";
import { businessCourses } from "./CourseData";

function BusinessSection() {
  return (
    <section className="mb-8 rounded-xl bg-white px-5 py-3 shadow-sm">
      <CategorySection
        title="Business Skills"
        courses={businessCourses}
      />
    </section>
  );
}

export default BusinessSection;