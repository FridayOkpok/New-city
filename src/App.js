import "./App.css";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./props/Layout";
import About from "./pages/About/About";
import Service from "./pages/Services/Service";
import Contact from "./pages/Contact/Contact";
import { useSelector } from "react-redux";
import OverLay from "./props/OverLay";
import LoginComponent from "./component/loginComponent/LoginArea";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Service />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
function App() {
  const loginIsShowing = useSelector((store) => store.Login);

  return (
    <>
      {loginIsShowing && (
        <div>
          <OverLay />
          <LoginComponent />
        </div>
      )}
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
