import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer';
import Header from './components/header';
import About from './pages/about';
import Notfound from './pages/notfound';
import { ProjectsRepositories } from './pages/projectsRepositories';
import { ProjectsSites } from './pages/projectsSites';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects/sites" element={<ProjectsSites />} />
        <Route path="/projects/repositories" element={<ProjectsRepositories />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
