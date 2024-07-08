import "./Icon.css"
import searchSVG from "../images/search-svgrepo-com.svg";
import bellSVG from "../images/bell-alt-1-svgrepo-com.svg";

const iconList = {
    "search": searchSVG,
    "bell": bellSVG
}

function Icon(props) {
  return (
    <img src={iconList[props.icon]} width="24" height="24" className="icon">
    </img>
  );
}

export function IconWithBadge({icon, amt = "0"}){
  const badge = () => {
    if (amt !== "0"){
      return (
        <div className="badge">{amt}</div>
      )
    }
    return null;
  }

  return (
    <div className="icon-with-badge">
      <Icon icon={icon}/>
      {badge()}
    </div>
  )
}

export function UserIcon() {
  return (
    <div className="user-icon">
  </div>
  )
}

export default Icon;
