import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import { IconWithBadge, UserIcon } from './components/Icon';
import Logo from './components/Logo';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        {/* <Searchbar/> */}
        <Button>Create Post</Button>
        <IconWithBadge icon="bell" amt="3"/>
        <UserIcon />
        <Logo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
