


import TallySection from "./TallySection";
import ExcelSection from "./ExcelSection";
import GSTSection from "./GSTSection";
import AccountingSection from "./AccountingSection";
import BusinessSection from "./BusinessSection";


export default function BrowseCategories() {

  return (
    <>
      <section
        id="courses"
        className="mx-auto mt-6 max-w-7xl px-4"
      >

        <h2 className="mb-4 text-2xl font-bold text-violet-900">
          Browse Top Categories
        </h2>

        <TallySection />

        <ExcelSection />

        <GSTSection />

        <AccountingSection />

        <BusinessSection />

      </section>

    </>
  )

} 
