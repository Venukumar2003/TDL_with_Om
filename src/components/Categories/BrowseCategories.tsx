
// import TallySection from "./TallySection";
// import ExcelSection from "./ExcelSection";
// import GSTSection from "./gstSection";

// const BrowseCategories = () => {
//     return (

//         <div>
//             <TallySection />
//             <ExcelSection />
//             <GSTSection />


//         </div>





//     );
// };

// export default BrowseCategories;


import TallySection from "./TallySection";
import ExcelSection from "./ExcelSection";
// import GSTSection from "./GSTSection";
import GSTSection from "./GSTSection";
import AccountingSection from "./AccountingSection";
import BusinessSection from "./BusinessSection";

import FreeResources from "../Sidebar/FreeResources";
import PremiumCard from "../Sidebar/PremiumCard";
import YoutubeVideos from "../Sidebar/YoutubeVideos";
import OurServices from "../Sidebar/OurServices";
import WhyChoose from "../Sidebar/WhyChoose";

const BrowseCategories = () => {
  return (
    <div className="">
    <section id="courses" className="mx-auto mt-2 flex max-w-7xl gap-6">

      {/* Left Side */}
      <div className="w-[75%] gap-2">

        <h2 className="mb-4 text-2xl font-bold text-violet-900">
          Browse Top Categories
        </h2>

        <TallySection />

        <ExcelSection />

        <GSTSection />
        <AccountingSection />
        <BusinessSection />

      </div>

      {/* Right Side */}
      <div className="w-[25%] space-y-8 -mt-42">

        <FreeResources />

        <PremiumCard />

        <YoutubeVideos />

        <OurServices />

        <WhyChoose />


      </div>

    </section>
    </div>
  );
};

export default BrowseCategories;