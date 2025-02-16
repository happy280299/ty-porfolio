// app.tsx
import React, { Suspense } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./Pages/routes"; // Make sure this path is correct based on your folder structure

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <ToastContainer />
        <RoutesComponent />
      </Suspense>
    </Router>
  );
}

export default App;
