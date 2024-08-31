import React from "react";

import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { MainHeader } from "./MainHeader";

export const Layout: React.FC = () => {
  return (
    <>
      <header className="header">
        <MainHeader />
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};
