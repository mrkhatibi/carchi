"use client"

import { useQuery } from "@tanstack/react-query"
import getAllRequests from "./getAllRequests"


export default function GetAllRequestsQuery() {
    const {data , isLoading , refetch} = useQuery({
        queryKey : ["getAllRequests"] ,
        queryFn : getAllRequests
    })
    return {data , isLoading , refetch}
}