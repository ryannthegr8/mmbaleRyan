import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/index.css";
import "./style/theme.css";
import "./style/responsive.css";

//components
import { About, Applications, Contact, Home, Services } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />

        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="./Applications" element={<Applications />} />
            <Route path="./About" element={<About />} />
            <Route path="./Services" element={<Services />} />
            <Route path="./Contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
