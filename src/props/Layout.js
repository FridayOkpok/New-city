import React from "react";
import NavBar from "../component/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Fotter from "../component/fotter/Fotter";

function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Fotter />
    </>
  );
}

export default Layout;
