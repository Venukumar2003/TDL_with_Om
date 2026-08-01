// import CategorySection from "./CategorySection";
// import {gstCourses} from "./CourseData";
// import YoutubeVideos from "../Sidebar/YoutubeVideos";


// function GSTSection (){

//     return(
    
//           <div className="w-[70%]">
               
//                 <section className="px-5 py-2 rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">


//                     <CategorySection
//                         title="GST & Texation"
//                         courses={gstCourses}
//                     />
//                 </section>

//                 <section className="w-[32%] ml-244 -mt-73">
//                     <YoutubeVideos />
//                 </section>

//             </div>
        
//     )
// }

// export default GSTSection;


import CategorySection from "./CategorySection";
import { gstCourses } from "./CourseData";

function GSTSection() {
  return (
    <section className="mb-8 rounded-xl bg-white p-5 shadow-sm bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <CategorySection
        title="GST & Taxation"
        courses={gstCourses}
      />
    </section>
  );
}

export default GSTSection;