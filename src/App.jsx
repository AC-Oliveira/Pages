import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<div />} />
      </Routes>
    </>
  );
}

export default App;
