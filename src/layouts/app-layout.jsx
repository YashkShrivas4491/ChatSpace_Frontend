import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
const AppLayout = () => {
  return (
    <div>
      <div className="bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <main className="min-h-screen container">
          <Header />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
