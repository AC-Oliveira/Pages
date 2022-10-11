import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer';
import Header from './components/header';
import About from './pages/about';
import Notfound from './pages/notfound';
import Projects from './pages/projects';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
