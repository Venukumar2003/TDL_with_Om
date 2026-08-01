interface CourseCardProps {
  image: string;
  title: string;
  price: string;
  oldPrice: string;
  duration: string;
  lessons: string;
}

const CourseCard = ({
  image,
  title,
  price,
  oldPrice,
  duration,
  lessons,
}: CourseCardProps) => {
  return (
    <div className="rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <img
        src={image}
        alt={title}
        className="h-40 w-full rounded-t-xl object-cover"
      />

      <div className="p-4">

        <h3 className="line-clamp-2 text-sm font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-xs text-gray-500">
          {duration} • {lessons}
        </p>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-lg font-bold text-violet-700">
            {price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            {oldPrice}
          </span>
        </div>

        <button className="mt-2 w-full rounded-lg bg-violet-700 py-2 text-sm font-medium text-white hover:bg-violet-800 cursor-pointer">
          View Course
        </button>

      </div>

    </div>
  );
};

export default CourseCard;