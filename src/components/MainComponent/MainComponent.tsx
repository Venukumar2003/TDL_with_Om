import Offers from "../Offers/Offers";
import BrowseCategories from "../Categories/BrowseCategories";

import FreeResources from "../Sidebar/FreeResources";
import PremiumCard from "../Sidebar/PremiumCard";
import YoutubeVideos from "../Sidebar/YoutubeVideos";
import OurServices from "../Sidebar/OurServices";
import WhyChoose from "../Sidebar/WhyChoose";

const MainComponent = () => {
  return (
    <section className="mx-auto mt-6 flex max-w-7xl flex-col gap-6 px-4 lg:flex-row">

      <div className="w-full lg:w-3/4">

        <Offers />

        <BrowseCategories />

      </div>

      <div className="w-full lg:w-1/4 space-y-7">

        <FreeResources />

        <PremiumCard />

        <YoutubeVideos />

        <OurServices />

        <WhyChoose />

      </div>

    </section>
  );
};

export default MainComponent;