export type Todo = {
  id: string;
  title: string;
  done: boolean;
  priority: "low" | "medium" | "high";
};
export type State = { items: Todo[]; filter: "all" | "completed" | "pending" };
