import {IconButton, IconWithCounter} from './Icon';
import './LeftBar.css';

function LeftBar() {
  return (
    <div className="leftBar">
        <IconWithCounter icon="heart-add" amt="6"/>
        <IconWithCounter icon="message" amt="16"/>
        <IconWithCounter icon="bookmark" amt="2"/>
        <IconButton icon="more"/>
    </div>
  );
}

export default LeftBar;
