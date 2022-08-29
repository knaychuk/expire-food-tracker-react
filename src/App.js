import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>

    </div>
  );
}

export default App;
