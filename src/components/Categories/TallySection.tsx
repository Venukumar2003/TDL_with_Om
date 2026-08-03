

import CategorySection from "./CategorySection";
import { tallyCourses } from "./CourseData";

function TallySection() {
  return (
    <section className="mb-5 rounded-xl bg-white p-5 shadow-sm">
      <CategorySection
        title="Tally Prime Mastery"
        courses={tallyCourses}
      />
    </section>
  );
}

export default TallySection;