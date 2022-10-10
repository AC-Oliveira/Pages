import './App.scss';
import Header from './components/header';
import GlobalProvider from './context/GlobalContext';
import About from './pages/about';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <About />
    </GlobalProvider>
  );
}

export default App;
