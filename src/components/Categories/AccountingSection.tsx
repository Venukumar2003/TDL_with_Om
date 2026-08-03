import CategorySection from "./CategorySection";
import { accountingCourses } from "./CourseData";

function AccountingSection() {
  return (
    <section className="mb-5 rounded-xl bg-white px-5 py-3 shadow-sm">
      <CategorySection
        title="Accounting & Finance"
        courses={accountingCourses}
      />
    </section>
  );
}

export default AccountingSection;