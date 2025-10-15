"use client";

import Loader from "@/components/modules/Loader";
import RequestCard from "@/components/modules/requestCard";
import GetAllRequestsQuery from "@/helpers/getAllRequestsQuery";
import GetUserDataQuery from "@/helpers/getUserDataQuery";
import { redirect } from "next/navigation";

function CheckRequests() {
  const { data, isLoading, refetch } = GetAllRequestsQuery();
  const { data: userData, isLoading: userLoading } = GetUserDataQuery();

  if (userLoading) return <Loader />;

  if (userData.role !== "ADMIN") {
    redirect("/");
  }
  if (isLoading) return <Loader />;
  const UnreviewedRequests = data.filter((item) => item.isOk === "Unreviewed");
  return (
    <div>
      {UnreviewedRequests.length > 0 ? (
        <>
          {" "}
          <div>
            {UnreviewedRequests.map((item) => (
              <RequestCard key={item._id} item={item} refetch={refetch} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h3>در حال حاضر درخواست در انتظار بررسی وجود ندارد</h3>
        </>
      )}
    </div>
  );
}

export default CheckRequests;
