import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "@/features/api/todoApi";
import todosReducer from "@/features/todos/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});
