import { FaPlayCircle } from "react-icons/fa";

interface OfferCardProps {
  title: string;
  discount: string;
}

const OfferCard = ({ title, discount }: OfferCardProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-2 py-2 transition-all duration-300 hover:border-violet-300 hover:shadow-md">

      <div className="flex items-center gap-2">

        <FaPlayCircle className="text-violet-700 text-3xl" />

        <span className="text-sm font-bold text-gray-700">
          {title}
        </span>

      </div>

      <span className="text-sm font-bold text-yellow-500">
        {discount}
      </span>

    </div>
  );
};

export default OfferCard;