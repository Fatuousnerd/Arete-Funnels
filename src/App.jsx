import Main from "./components/Main";
import ThemeProvider from "./utils/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Ares from "./funnels/Ares/Ares";

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Ares" element={<Ares />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
