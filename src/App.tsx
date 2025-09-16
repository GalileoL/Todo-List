import "./App.css";
import { Suspense, lazy } from "react";
const TodosPage = lazy(() => import("./pages/TodosPage"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TodosPage />
      </Suspense>
    </>
  );
}

export default App;
