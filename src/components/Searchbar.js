import Icon from "./Icon";
import "./Searchbar.css"

function Searchbar() {
  return (
    <div className="searchbar">
        <Icon icon="search"/>
        <input className="searchbar" placeholder="Search...">
        
        </input>
    </div>
  );
}

export default Searchbar;
