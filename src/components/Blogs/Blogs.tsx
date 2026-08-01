import { FaNewspaper } from "react-icons/fa";
import BlogsCard from "./BlogsCard";
import { blogs } from "./BlogData";

const Blogs = () => {
  return (
    <section id="blog" className="rounded-2xl bg-white p-3 shadow-sm">

      {/* Header */}
      <div className="mb-2 flex items-center justify-between">

        <div className="flex items-center gap-2">

          <FaNewspaper className="text-violet-700" />

          <h2 className="text-xl font-bold text-violet-900">
            Latest Blog Posts
          </h2>

        </div>

        <button className="text-sm font-semibold text-violet-700 hover:text-violet-900  hover:bg-purple-200 rounded-lg p-1 cursor-pointer">
          View All
        </button>

      </div>

      {/* Blog List */}
      {blogs.map((blog) => (
        <BlogsCard
          key={blog.id}
          image={blog.image}
          title={blog.title}
          date={blog.date}
          readTime={blog.readTime}
        />
      ))}

    </section>
  );
};

export default Blogs;