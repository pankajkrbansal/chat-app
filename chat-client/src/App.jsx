import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import UserContextProvider from "./components/UserContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* <Navbar /> */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Register />} /> {/* Example Home route */}
              <Route path="/register" element={<Register />} />
              {/* <Route path="/about" element={<About />} />{" "} */}
              {/* Example About route */}
            </Routes>
          </main>
        </div>
      </Router>
    </UserContextProvider>
  );
}

export default App;
