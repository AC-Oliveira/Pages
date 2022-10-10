import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer';
import Header from './components/header';
import About from './pages/about';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
