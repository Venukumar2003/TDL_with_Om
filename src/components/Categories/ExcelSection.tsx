// import CategorySection from "./CategorySection";
// import {excelCourses } from "./CourseData";
// import YoutubeVideos from "../Sidebar/YoutubeVideos";


// function ExcelSection (){

//     return(
//         <>
//           <div className="w-[70%] -mt-28 ml-5">
               
//                 <section className="px-5 py-3 rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">


//                     <CategorySection
//                         title="Excel & Data Skills"
//                         courses={excelCourses}
//                     />
//                 </section>

//                 <section className="w-[32%] ml-244 -mt-73">
//                     <YoutubeVideos />
//                 </section>

//             </div>
        
//         </>
//     )
// }

// export default ExcelSection;


import CategorySection from "./CategorySection";
import { excelCourses } from "./CourseData";

function ExcelSection() {
  return (
    <section className="mb-8 rounded-xl bg-white p-5 shadow-sm">
      <CategorySection
        title="Excel & Data Skills"
        courses={excelCourses}
      />
    </section>
  );
}

export default ExcelSection;