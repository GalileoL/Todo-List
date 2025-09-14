import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { State, Todo } from "./types";
const initialState: State = { items: [], filter: "all" };

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      prepare: (title: string, priority: Todo["priority"] = "medium") => ({
        payload: { id: nanoid(), title, done: false, priority },
      }),
      reducer: (state, action: PayloadAction<Todo>) => {
        state.items.unshift(action.payload);
      },
    },
    toggle(state, action: PayloadAction<string>) {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    remove(state, action: PayloadAction<string>) {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    setFilter(state, action: PayloadAction<State["filter"]>) {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggle, remove, setFilter } = todos.actions;
export default todos.reducer;
