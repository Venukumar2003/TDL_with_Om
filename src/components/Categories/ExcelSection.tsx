

import CategorySection from "./CategorySection";
import { excelCourses } from "./CourseData";

function ExcelSection() {
  return (
    <section className="mb-5 rounded-xl bg-white p-5 shadow-sm">
      <CategorySection
        title="Excel & Data Skills"
        courses={excelCourses}
      />
    </section>
  );
}

export default ExcelSection;