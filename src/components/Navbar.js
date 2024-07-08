import './Navbar.css';
import Searchbar from './Searchbar';
import Button from './Button';
import { IconWithBadge, UserIcon } from './Icon';
import Logo from './Logo';

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-child">
            <Logo />
            <Searchbar/>
            <Button>Create Post</Button>
            <IconWithBadge icon="bell" amt="3"/>
            <UserIcon />
        </div>
    </div>
  );
}

export default Navbar;
