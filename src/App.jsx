import { BrowserRouter } from "react-router-dom";
import "./style/index.css";

//components
import { Home } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
