"use client";

import { useQuery } from "@tanstack/react-query";
import getAllPosts from "./getAllPosts";

export default function GetAllPostsQuery() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getAllPosts"],
    queryFn: getAllPosts,
  });
  return { data, isLoading, refetch };
}
