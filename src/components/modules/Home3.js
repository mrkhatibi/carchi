"use client";

import GetAllPostsQuery from "@/helpers/getAllPostsQuery";
import Loader from "./Loader";
import BlogCard from "./blogCard";
import Link from "next/link";

function Home3() {
  const { data, isLoading } = GetAllPostsQuery();
  if (isLoading) return <Loader />;
  const showPosts = data.sort(() => 0.5 - Math.random()).slice(0, 8);
  return (
    <div className="m-4 flex flex-col items-center w-full ">
      <h3 className="text-4xl font-bold text-black drop-shadow-lg">وبلاگ ما</h3>
      <div className=" m-4 grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {showPosts.map((item) => (
          <BlogCard key={item._id} item={item} />
        ))}
      </div>
      <Link href={"/blogs"}>
        <button className="bg-blue-700 p-7 cursor-pointer rounded-xl text-white shadow-2xl transition-transform duration-500 ease-in-out hover:scale-110">
          پست های بیشتر
        </button>
      </Link>
    </div>
  );
}

export default Home3;
