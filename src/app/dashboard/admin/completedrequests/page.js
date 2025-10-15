"use client";

import Loader from "@/components/modules/Loader";
import RequestCard from "@/components/modules/requestCard";
import GetAllRequestsQuery from "@/helpers/getAllRequestsQuery";
import GetUserDataQuery from "@/helpers/getUserDataQuery";
import { redirect } from "next/navigation";

function CompletedRequests() {
  const { data, isLoading, refetch } = GetAllRequestsQuery();
   const { data: userData, isLoading: userLoading } = GetUserDataQuery();
  
    if (userLoading) return <Loader />;
  
    if (userData.role !== "ADMIN") {
      redirect("/");
    }
  if (isLoading) return <Loader />;
  const completedRequests = data.filter((item) => item.isOk === "Completed");
  return (
    <div>
      {completedRequests.length > 0 ? (
        <div>
          {completedRequests.map((item) => (
            <RequestCard key={item._id} item={item} refetch={refetch} />
          ))}
        </div>
      ) : (
        <h3>درخواست انجام کار شده ای نداریم</h3>
      )}
    </div>
  );
}

export default CompletedRequests;
