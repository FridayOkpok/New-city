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
import UserQuote from "./pages/getquotes/Getquote";
import { useSelector } from "react-redux";
import OverLay from "./props/OverLay";
import LoginComponent from "./component/loginComponent/LoginArea";
import QuoteForm from "./component/Quote/QuoteForm";
import Quoteinventory from "./component/quote-inventory/Quote-inventory";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Service />} />
      <Route path="contact" element={<Contact />} />
      <Route path="qoutes" element={<UserQuote />} />
      <Route path="qoutes" element={<UserQuote />}>
        <Route index element={<QuoteForm />} />
        <Route path="quote-inventory" element={<Quoteinventory />} />
      </Route>
    </Route>
  )
);

function App() {
  const loginIsShowing = useSelector((store) => store.login.Login);

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
