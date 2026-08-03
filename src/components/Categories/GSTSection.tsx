
import CategorySection from "./CategorySection";
import { gstCourses } from "./CourseData";

function GSTSection() {
  return (
    <section className="mb-5 rounded-xl bg-white p-5 shadow-sm bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <CategorySection
        title="GST & Taxation"
        courses={gstCourses}
      />
    </section>
  );
}

export default GSTSection;