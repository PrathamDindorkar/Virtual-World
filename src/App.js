import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import Story from "./components/Story";

let name = "Pratham";

function App() {
  const [mode, setMode] = useState("light"); // whether the dark mode is enabled or disabled

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Activated", "danger");
    }
  };

  return (
    <>
    <Navbar title={"VW"} about={"About Us"}></Navbar>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/home" element={<TextForm />} />
        <Route path="/story" element={<Story/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
