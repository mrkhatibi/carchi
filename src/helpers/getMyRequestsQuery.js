"use client"

import { useQuery } from "@tanstack/react-query"
import getMyRequests from "./getMyRequests"



export default function GetMyRequestsQuery() {
    const {data , isLoading , refetch} = useQuery({
        queryKey : ["getMyRequests"] ,
        queryFn : getMyRequests
    })
    return {data , isLoading , refetch}
}