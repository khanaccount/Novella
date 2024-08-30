import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const Layout: React.FC = () => {
  return (
    <>
      <header className="header">
        <Header />
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
