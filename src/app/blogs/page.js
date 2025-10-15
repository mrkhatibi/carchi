"use client";

import BlogCard from "@/components/modules/blogCard";
import Loader from "@/components/modules/Loader";
import GetAllPostsQuery from "@/helpers/getAllPostsQuery";

function Blogs() {
  const { data, isLoading } = GetAllPostsQuery();
  if (isLoading) return <Loader />;
  return (
    <div className="bg-gray-100 m-10 p-10 rounded-2xl">
      <h3 className=" p-2 text-5xl text-center ">بلاگ ها</h3>
      <div className=" m-3  grid gap-6 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => (
          <BlogCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
