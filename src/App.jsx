import Main from "./components/Main";
import ThemeProvider from "./utils/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import One from "./funnels/One/One";

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/one" element={<One />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
