import './Navbar.css';
import Searchbar from './Searchbar';
import Button from './Button';
import { IconWithBadge, UserIcon } from './Icon';
import Logo from './Logo';

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-child">
            <div className="flex-child left-child">
                <Logo />
                <Searchbar/>
            </div>
            <div className="flex-child right-child">
                <Button>Create Post</Button>
                <IconWithBadge icon="bell" amt="3"/>
                <UserIcon />
            </div>
        </div>
    </div>
  );
}

export default Navbar;
