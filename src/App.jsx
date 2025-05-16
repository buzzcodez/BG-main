import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Reader from './pages/Reader';
import Chapters from './pages/Chapters';
import { ThemeProvider } from './context/ThemeContext';
import Footer from './components/Footer';  // fix capital F if needed

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <div className="flex-1 overflow-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chapters" element={<Chapters />} />
                <Route path="/chapter/:chapter" element={<Reader />} />
                <Route path="/chapter/:chapter/verse/:verse" element={<Reader />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
