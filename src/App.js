import './App.css';
import Navbar from './components/Navbar';
import LeftSidebar from './components/LeftSidebar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LeftSidebar />
      <main className='wrapper'>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
