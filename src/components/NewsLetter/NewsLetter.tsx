import newsLetter from "../../assets/newsLetter.jpeg"

import { useState } from "react";

const Newsletter = () => {

    const [email,setEmail]= useState("")
  return (
    <section className="mx-auto mt-2 max-w-7xl px-5">

      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-violet-800 via-purple-600 to-violet-500 px-8 py-6 lg:flex-row">


        <div className="flex items-center gap-5">

          <img
            src={newsLetter}
            alt="Newsletter"
            className="h-15 w-15 object-contain rounded-2xl"
          />

          <div>

            <h2 className="text-xl font-bold text-white">
              Stay Updated with Latest Courses & Offers
            </h2>

            <p className="mt-1 text-sm text-violet-100">
              Subscribe to our newsletter and never miss an update.
            </p>

          </div>

        </div>

        <div className="flex w-full max-w-lg gap-3">

          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email address"
            onChange={(e)=>setEmail(e.target.value)}
            className="flex-1 rounded-full border-none bg-white px-6 py-3 text-sm outline-none"
          />

          <button className="rounded-4xl bg-yellow-400 px-3 py-2 font-semibold text-violet-900 transition hover:bg-yellow-300 cursor-pointer">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;