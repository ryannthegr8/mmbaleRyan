import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import "./style/index.css";
import "./style/theme.css";
import "./style/responsive.css";

//Pages
import { Applications, Contact, Home, Services, About } from "./pages";

//components
import { Nav, ThemeToggle } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <header>
          <nav className="navbar">
            <div className="nav-links">
              <NavLink to="/">Home </NavLink>
              <NavLink to="/about">About</NavLink>
            </div>
          </nav>
        </header> */}
        <Nav />
        <ThemeToggle />
        <main>
          <Routes>
            <Route index exact path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
