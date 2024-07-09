import "./Icon.css"

function CustomSVG(icon, classList) {
  if (icon === "bookmark") {
    return (
      <svg className="icon bookmark" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z" stroke="#000000" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === "search") {
    return (
      <svg className="icon search" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_15_152)">
          <rect width="24" height="24" fill="white" />
          <circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" strokeLinejoin="round" />
          <path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#000000" />
        </g>
        <defs>
          <clipPath id="clip0_15_152">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }
  if (icon === "bell") {
    return (
      <svg className="icon bell" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.0003 21H15.0003M18.0003 8.6C18.0003 7.11479 17.3682 5.69041 16.2429 4.6402C15.1177 3.59 13.5916 3 12.0003 3C10.409 3 8.88288 3.59 7.75766 4.6402C6.63245 5.69041 6.0003 7.11479 6.0003 8.6C6.0003 11.2862 5.32411 13.1835 4.52776 14.4866C3.75646 15.7486 3.37082 16.3797 3.38515 16.5436C3.40126 16.7277 3.4376 16.7925 3.58633 16.9023C3.71872 17 4.34793 17 5.60636 17H18.3943C19.6527 17 20.2819 17 20.4143 16.9023C20.563 16.7925 20.5994 16.7277 20.6155 16.5436C20.6298 16.3797 20.2441 15.7486 19.4729 14.4866C18.6765 13.1835 18.0003 11.2862 18.0003 8.6Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === "heart-add") {
    return (
      <svg className="icon heart-add" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 17V11M12 20.0706L4.46447 12.5351C2.51184 10.5824 2.51184 7.41661 4.46447 5.46399C6.0168 3.91166 7.89056 3.43634 9.78125 4.3589C10.5317 4.72507 11.5156 5.46399 12 6.42921C12.4844 5.46399 13.4683 4.72507 14.2187 4.3589C16.1094 3.43634 17.9832 3.91166 19.5355 5.46399C20.512 6.44043 21.0001 7.72024 21 9.00001M14 14H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === "message") {
    return (
      <svg className="icon message flip" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9021 3.5901 15.6665 4.59721 17.1199C4.70168 17.2707 4.7226 17.4653 4.64529 17.6317L3.42747 20.2519C3.23699 20.5853 3.47768 21 3.86159 21H12Z" stroke="#000000" strokeWidth="2" />
      </svg>
    )
  }
  if (icon === "more") {
    return (
      <svg className="icon more" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="white" />
        <circle cx="7" cy="12" r="0.5" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="0.5" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="12" r="0.5" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
}

function Icon(props) {
  let classList = "icon"

  if (props.icon === "message") {
    classList += " flip"
  }

  console.log(classList)

  return (
    CustomSVG(props.icon, classList)
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

export function IconButton({ icon }) {
  return (
    <button className="icon-button">
      <Icon icon={icon} />
    </button>
  )
}

export default Icon;
