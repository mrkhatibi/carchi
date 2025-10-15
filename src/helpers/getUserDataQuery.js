"use client"
import { useQuery } from "@tanstack/react-query";
import getUserData from "./getUserData";



export default function GetUserDataQuery() {
    const {data , isLoading , refetch} = useQuery({
        queryKey : ["GetUserDataQuery"] ,
        queryFn : getUserData ,
        staleTime : 0
    })
    return {data , isLoading , refetch}
}