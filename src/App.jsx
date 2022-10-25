import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Technologies } from './pages/technologies';
import { ProjectsRepositories } from './pages/projectsRepositories';
import { ProjectsSites } from './pages/projectsSites';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/sites" element={<ProjectsSites />} />
        <Route path="/repositories" element={<ProjectsRepositories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
