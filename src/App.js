import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
