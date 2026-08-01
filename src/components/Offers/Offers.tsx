import { FaTag } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import OfferCard from "./OfferCard";
import { offers } from "./OfferData";


const Offers = () => {
    return (
        <section id="offers" className="py-4 -ml-10">

            <div className="mx-auto max-w-7xl px-0">


                <div className="flex flex-col gap-6 lg:flex-row">



                    <div className="w-full lg:w-[75%]">

                        <div className="rounded-2xl bg-white p-4 shadow-sm">



                            <div className="mb-6 flex items-center justify-between">

                                <div className="flex items-center gap-2">

                                    <FaTag className="text-red-500" />

                                    <h2 className="text-xl font-bold text-violet-900">
                                        Latest Course Offers
                                    </h2>

                                </div>

                                <div className="flex gap-2">

                                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-violet-700 hover:text-white cursor-pointer">
                                        <IoChevronBack />
                                    </button>

                                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-violet-700 hover:text-white cursor-pointer">
                                        <IoChevronForward />
                                    </button>

                                </div>

                            </div>



                            <div className="w-[900px] grid gap-2 md:grid-cols-4">

                                {offers.map((offer) => (
                                    <OfferCard
                                        key={offer.id}
                                        title={offer.title}
                                        discount={offer.discount}
                                    />
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Offers;