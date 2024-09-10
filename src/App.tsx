import React from "react";
import { BrowserRouter } from "react-router-dom";
import LayoutPage from "./modules/core/components/layout";

function App() {
  return (
    <BrowserRouter>
      <LayoutPage />
    </BrowserRouter>
  );
}

export default App;
