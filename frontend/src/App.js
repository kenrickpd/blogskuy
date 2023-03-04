import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import LandingPage from "./pages/LandingPage";

function App() {
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;