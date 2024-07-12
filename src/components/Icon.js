import "./Icon.css"
import CustomSVG from "./Svgs"

function Icon({icon, size=""}) {
  let classList = " "

  classList += size

  return (
    CustomSVG(icon, classList)
  );
  // return (
  //   <img src={iconList[props.icon]} width="22" height="22" className="icon">
  //   </img>
  // );
}

export function IconWithBadge({ icon, amt = "0" }) {
  const badge = () => {
    if (amt !== "0") {
      return (
        <div className="badge">{amt}</div>
      )
    }
    return null;
  }

  return (
    <div className="icon-with-badge">
      <Icon icon={icon} />
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

export function IconWithCounter({ icon, amt }) {
  return (
    <button className="icon-with-counter">
      <Icon icon={icon} />
      <div className="counter">{amt}</div>
    </button>
  )
}

export function IconButton({ icon, shape="", handleClick }) {
  return (
    <button onClick={handleClick} className={"icon-button " + shape}>
      <Icon icon={icon} />
    </button>
  )
}

export function HorizontalIconButton({children, icon, shape="", handleClick }) {
  return (
    <button className={"horizontal-icon-button" + shape}>
      {children}
      <Icon icon={icon}></Icon>
    </button>
  )
}

export default Icon;
