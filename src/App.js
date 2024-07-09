import './App.css';
import Navbar from './components/Navbar';
import LeftBar from './components/LeftBar';
import Image from './components/Image';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-flex-layout">
        <div className="main-flex-layout-child">
          <LeftBar/>
          <Article />
          <div className="div-3">3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
