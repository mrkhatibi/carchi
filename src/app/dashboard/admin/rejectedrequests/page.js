"use client";

import Loader from "@/components/modules/Loader";
import RequestCard from "@/components/modules/requestCard";
import GetAllRequestsQuery from "@/helpers/getAllRequestsQuery";
import GetUserDataQuery from "@/helpers/getUserDataQuery";
import { redirect } from "next/navigation";

function RejectedRequests() {
  const { data, isLoading, refetch } = GetAllRequestsQuery();
  const { data: userData, isLoading: userLoading } = GetUserDataQuery();

  if (userLoading) return <Loader />;

  if (userData.role !== "ADMIN") {
    redirect("/");
  }
  if (isLoading) return <Loader />;
  const rejectedRequests = data.filter((item) => item.isOk === "rejected");
  return (
    <div>
      {rejectedRequests.length > 0 ? (
        <div>
          {rejectedRequests.map((item) => (
            <RequestCard key={item._id} item={item} refetch={refetch} />
          ))}
        </div>
      ) : (
        <h3>درخواست رد شده ای نداریم</h3>
      )}
    </div>
  );
}

export default RejectedRequests;
