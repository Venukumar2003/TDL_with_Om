import {
  FaYoutube,
  FaTelegram,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import FooterColumn from "./FooterColumn";

import {
  quickLinks,
  categories,
  support,
} from "./FooterData";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-r from-violet-950 to-violet-800">

      <div className="mx-auto max-w-7xl px-6 py-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">


          <div>

            <h2 className="text-3xl font-bold text-yellow-400">
              TDL with Om
            </h2>

            <p className="mt-4 text-sm leading-7 text-violet-200">
              Your trusted platform to learn
              Tally, GST, Excel, Accounting
              and much more with practical
              examples and easy explanations.
            </p>

            <div className="mt-6 flex gap-3">

              <div className="rounded-full bg-violet-700 p-3 hover:bg-violet-600 cursor-pointer">
                <FaYoutube className="text-white" />
              </div>

              <div className="rounded-full bg-violet-700 p-3 hover:bg-violet-600 cursor-pointer">
                <FaTelegram className="text-white" />
              </div>

              <div className="rounded-full bg-violet-700 p-3 hover:bg-violet-600 cursor-pointer">
                <FaFacebook className="text-white" />
              </div>

              <div className="rounded-full bg-violet-700 p-3 hover:bg-violet-600 cursor-pointer">
                <FaInstagram className="text-white" />
              </div>

            </div>

          </div>

         <FooterColumn
            title="Quick Links"
            items={quickLinks}
          />

          <FooterColumn
            title="Categories"
            items={categories}
          />

          <FooterColumn
            title="Support"
            items={support}
          />


          <div>

            <h3 className="mb-4 text-lg font-bold text-white">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm text-violet-200">

              <div className="flex items-center gap-3">
                <FaPhone />
                +91 99999 99999
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope />
                support@tdlwithom.com
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                India
              </div>

              <div className="flex items-center gap-3">
                <FaClock />
                Mon - Sat : 10:00 AM - 7:00 PM
              </div>

            </div>

          </div>

        </div>


        <div className="mt-10 border-t border-violet-700 pt-5 text-center text-sm text-violet-300">

          © 2024 TDL with Om. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;