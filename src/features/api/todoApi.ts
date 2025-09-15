import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Todo"],
  endpoints: (build) => ({
    fetchTodos: build.query<any[], void>({
      query: () => "/todos",
      providesTags: ["Todo"],
    }),
    createTodo: build.mutation<
      any,
      { title: string; priority: "low" | "medium" | "high" }
    >({
      query: (body) => ({
        url: "/todos",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});
export const { useFetchTodosQuery, useCreateTodoMutation } = todoApi;
