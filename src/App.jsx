import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/index.css";
import "./style/theme.css";
import "./style/responsive.css";

//Pages
import { Applications, Contact, Home, Services, About } from "./pages";

//components
import { Nav, ThemeToggle } from "./components";

//loader
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loaderCard">
          <div className="loader">
            <p>loading</p>
            <div className="wordsLoader">
              <span className="wordLoader">000</span>
              <span className="wordLoader">025</span>
              <span className="wordLoader">050</span>
              <span className="wordLoader">075</span>
              <span className="wordLoader">100</span>
              <span className="wordLoader">100</span>
            </div>
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <Nav />
          <ThemeToggle />
          <main>
            <Routes>
              <Route index exact path="/" element={<Home />} />
            </Routes>
          </main>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
