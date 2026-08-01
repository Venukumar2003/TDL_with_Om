import { FaRegClock } from "react-icons/fa";

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  readTime: string;
}

const BlogsCard = ({
  image,
  title,
  date,
  readTime,
}: BlogCardProps) => {
  return (
    <div className="flex items-center gap-4 border-b border-gray-200 py-2 last:border-none">

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-15 w-25 rounded-lg object-cover"
      />

      {/* Content */}
      <div className="flex-1">

        <h3 className="text-sm font-semibold text-gray-900 hover:text-violet-700 cursor-pointer">
          {title}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">

          <span>{date}</span>

          <span>•</span>

          <FaRegClock className="text-[10px]" />

          <span>{readTime}</span>

        </div>

      </div>

    </div>
  );
};

export default BlogsCard;