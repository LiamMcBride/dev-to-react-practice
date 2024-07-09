import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import { IconWithBadge, UserIcon } from './components/Icon';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import LeftBar from './components/LeftBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-flex-layout">
        <div className="main-flex-layout-child">
          <LeftBar/>
          <div className="div-2">2</div>
          <div className="div-3">3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
