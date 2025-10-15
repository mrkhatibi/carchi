"use client"

import { useQuery } from "@tanstack/react-query"
import getAllUsers from "./getAllUsers"


export default function GetAllUsersQuery() {
    const {data , isLoading , refetch} = useQuery({
        queryKey : ["getAllUsers"] ,
        queryFn : getAllUsers
    })
    return {data , isLoading , refetch}
}