import React from "react";
import { Header } from "components/Header";
import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer"></footer>
    </>
  );
};
