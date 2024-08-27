import React from "react";
import { Routes, Route } from "react-router-dom";
import "styles/index.scss";

import { Layout } from "components/Layout";
import { Home } from "pages/Home";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
