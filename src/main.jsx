import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import './index.css';
import Navbar from './components/navbar/navbar';
import About from "./components/about/about";
import Project from "./components/project/project";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="containerApp">
        <main className="contentApp">
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
          </Routes>
          <About />
          <Project />
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
