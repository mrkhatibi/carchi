"use client";
import GetUserDataQuery from "@/helpers/getUserDataQuery";
import Link from "next/link";
import Loader from "./Loader";

function Home2() {
  const { data, isLoading } = GetUserDataQuery();
  if (isLoading) return <Loader />;
  return (
    <div className="bg-blue-700 text-white py-16 px-6 flex justify-center text-center">
      {data ? (
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 leading-relaxed">
            برای دریافت نوبت دکمه زیر را کلیک کنید
          </h3>
          <Link href="/dashboard/newrequest">
            <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-100 transition">
              دریافت نوبت
            </button>
          </Link>
        </div>
      ) : (
        <div className="max-w-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
            برای دریافت نوبت ابتدا وارد حساب کاربری خود شوید
          </h3>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signin">
              <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-100 transition">
                حساب کاربری دارم
              </button>
            </Link>

            <Link href="/signup">
              <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition">
                حساب ندارم
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home2;
