import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navigation_bar from "./Components/Navigation_bar";

const User_layout2 = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <div className="flex">
        <div className="nav_bar_pos_layout2">
          <Navigation_bar />
        </div>
        <main>
          <Outlet />
        </main>
      </div>
      {/* <Footer /> */}
      <Footer />
    </div>
  );
};

export default User_layout2;