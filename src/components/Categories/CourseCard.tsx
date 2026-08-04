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
    <div className="rounded-xl bg-white transition hover:shadow-lg overflow-hidden shadow-2xl hover:shadow-violet-500/30 hover:-translate-y-2 transition-all duration-500 ">

      <img
        src={image}
        alt={title}
        className="h-40 w-full rounded-t-xl object-cover"
      />

      <div className="flex flex-1 flex-col p-4">

        <h3 className="min-h-[56px] text-sm font-semibold leading-6">
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

        <button className="mt-2 w-full rounded-lg bg-violet-700 py-2 text-sm font-medium text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-150 cursor-pointer">
          View Course
        </button>

      </div>

    </div>
  );
};

export default CourseCard;
