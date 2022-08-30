import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { useAuthContext } from "./hooks/useAuthContext"

import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" /> } />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter> 
      )}

    </div>
  );
}

export default App;
