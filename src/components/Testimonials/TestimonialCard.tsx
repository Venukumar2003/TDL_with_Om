import { FaStar } from "react-icons/fa";

interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  review: string;
}

const TestimonialCard = ({
  image,
  name,
  role,
  review,
}: TestimonialCardProps) => {
  return (
    <div className="rounded-2xl bg-white p-3 shadow-sm transition hover:-translate-y-2 duration-500 hover:shadow-lg  ">


      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <h3 className="font-bold text-violet-900">
            {name}
          </h3>

          <p className="text-sm text-gray-500">
            {role}
          </p>
        </div>
      </div>

      <div className="mt-4 flex text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      <p className="mt-4 text-sm leading-6 text-gray-600">
        {review}
      </p>
    </div>
  );
};

export default TestimonialCard;