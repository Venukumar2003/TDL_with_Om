import {
  FaCheckCircle
} from "react-icons/fa";

const PremiumCard = () => {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-violet-700 to-purple-600 p-5 text-white shadow-2xl hover:shadow-violet-500/30 hover:-translate-y-2 transition-all duration-500 sm:p-6">

      <h2 className="text-3xl sm:text-2xl font-bold">
        Get Unlimited Access
      </h2>

      <p className="mt-6 text-violet-100">
        Unlock all premium courses,
        certificates and more.
      </p>

      <div className="mt-6 space-y-8">

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-yellow-300" />
          <span>All Premium Courses</span>
        </div>

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-yellow-300" />
          <span>Downloadable Resources</span>
        </div>

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-yellow-300" />
          <span>Completion Certificates</span>
        </div>

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-yellow-300" />
          <span>Priority Support</span>
        </div>

      </div>

      <button
        className="mt-6 w-full rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-400 py-3 sm:py-4 font-bold text-violet-900 transition hover:bg-yellow-300 cursor-pointer">
        Join Now - ₹999/Year
      </button>

    </div>
  );
};

export default PremiumCard;