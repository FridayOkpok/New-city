import "./App.css";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<Home />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}
// function App() {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }

export default App;
