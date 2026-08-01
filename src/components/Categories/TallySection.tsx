// import CategorySection from "./CategorySection";
// import { tallyCourses } from "./CourseData";
// import PremiumCard from "../Sidebar/PremiumCard";


// function TallySection (){
//     return(
//       <>

//         <div className="w-[70%] -mt-55 ml-5">
//                 <h2 className="mb-2 text-2xl font-bold text-violet-900">
//                     Browse Top Categories
//                 </h2>

//                 <section className="px-5 py-3 rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">


//                     <CategorySection
//                         title="Tally Prime Mastery"
//                         courses={tallyCourses}
//                     />
//                 </section>

//                 {/* <section className="w-[32%] ml-244 -mt-60">
//                     <PremiumCard />
//                 </section> */}

//             </div>
      
      
//       </>
//     )
// }

// export default TallySection;



import CategorySection from "./CategorySection";
import { tallyCourses } from "./CourseData";

function TallySection() {
  return (
    <section className="mb-8 rounded-xl bg-white p-5 shadow-sm">
      <CategorySection
        title="Tally Prime Mastery"
        courses={tallyCourses}
      />
    </section>
  );
}

export default TallySection;