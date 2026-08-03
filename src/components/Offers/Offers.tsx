import { FaTag } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import OfferCard from "./OfferCard";
import { offers } from "./OfferData";

const Offers = () => {
  return (
    <section id="offers" className="mb-8">

      <div className="rounded-2xl bg-white p-5 shadow-sm">

        {/* Header */}
        <div className="mb-5 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <FaTag className="text-red-500" />

            <h2 className="text-xl font-bold text-violet-900">
              Latest Course Offers
            </h2>

          </div>

          <div className="flex gap-2">

            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 hover:bg-violet-700 hover:text-white cursor-pointer">
              <IoChevronBack />
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 hover:bg-violet-700 hover:text-white cursor-pointer">
              <IoChevronForward />
            </button>

          </div>

        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">

          {offers.map((offer) => (
            <OfferCard
              key={offer.id}
              title={offer.title}
              discount={offer.discount}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Offers;