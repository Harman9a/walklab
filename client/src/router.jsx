// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutMain from "./Pages/LayoutMain";
import Login from "./Pages/User/Auth/LoginNew";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<LayoutMain />} />
      </Routes>
    </Router>
  );
};

export default App;
