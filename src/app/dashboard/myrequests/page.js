"use client"

import Loader from "@/components/modules/Loader"
import RequestCard from "@/components/modules/requestCard"
import GetMyRequestsQuery from "@/helpers/getMyRequestsQuery"
import { redirect } from "next/navigation"

function MyRequests() {
    const {data , isLoading} = GetMyRequestsQuery()
    if(isLoading)return <Loader />
    if (!data) {
        redirect("/");
      }
  return (
    <div>
        <h3>درخواست های من</h3>
        {data.map(item=> (
            <RequestCard key={item._id} item={item}/>
        ))}
    </div>
  )
}

export default MyRequests