import "./Icon.css"

function CustomSVG(icon, classList) {
  if (icon === "bookmark") {
    return (
      <svg className={"icon bookmark" + classList} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z" stroke="#000000" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === "search") {
    return (
      <svg className={"icon search" + classList} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <svg className={"icon bell" + classList} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.0003 21H15.0003M18.0003 8.6C18.0003 7.11479 17.3682 5.69041 16.2429 4.6402C15.1177 3.59 13.5916 3 12.0003 3C10.409 3 8.88288 3.59 7.75766 4.6402C6.63245 5.69041 6.0003 7.11479 6.0003 8.6C6.0003 11.2862 5.32411 13.1835 4.52776 14.4866C3.75646 15.7486 3.37082 16.3797 3.38515 16.5436C3.40126 16.7277 3.4376 16.7925 3.58633 16.9023C3.71872 17 4.34793 17 5.60636 17H18.3943C19.6527 17 20.2819 17 20.4143 16.9023C20.563 16.7925 20.5994 16.7277 20.6155 16.5436C20.6298 16.3797 20.2441 15.7486 19.4729 14.4866C18.6765 13.1835 18.0003 11.2862 18.0003 8.6Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === "heart-add") {
    return (
      <svg className={"icon heart-add" + classList} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 17V11M12 20.0706L4.46447 12.5351C2.51184 10.5824 2.51184 7.41661 4.46447 5.46399C6.0168 3.91166 7.89056 3.43634 9.78125 4.3589C10.5317 4.72507 11.5156 5.46399 12 6.42921C12.4844 5.46399 13.4683 4.72507 14.2187 4.3589C16.1094 3.43634 17.9832 3.91166 19.5355 5.46399C20.512 6.44043 21.0001 7.72024 21 9.00001M14 14H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === "message") {
    return (
      <svg className={"icon message flip" + classList} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9021 3.5901 15.6665 4.59721 17.1199C4.70168 17.2707 4.7226 17.4653 4.64529 17.6317L3.42747 20.2519C3.23699 20.5853 3.47768 21 3.86159 21H12Z" stroke="#000000" strokeWidth="2" />
      </svg>
    )
  }
  if (icon === "more") {
    return (
      <svg className={"icon more" + classList} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="none" />
        <circle cx="7" cy="12" r="0.5" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="0.5" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="12" r="0.5" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (icon === "select") {
    return (
      <svg className={"icon select" + classList} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289L7.29289 8.29289C6.90237 8.68342 6.90237 9.31658 7.29289 9.70711C7.68342 10.0976 8.31658 10.0976 8.70711 9.70711L12 6.41421L15.2929 9.70711C15.6834 10.0976 16.3166 10.0976 16.7071 9.70711C17.0976 9.31658 17.0976 8.68342 16.7071 8.29289L12.7071 4.29289ZM7.29289 15.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L16.7071 15.7071C17.0976 15.3166 17.0976 14.6834 16.7071 14.2929C16.3166 13.9024 15.6834 13.9024 15.2929 14.2929L12 17.5858L8.70711 14.2929C8.31658 13.9024 7.68342 13.9024 7.29289 14.2929C6.90237 14.6834 6.90237 15.3166 7.29289 15.7071Z" fill="#000000"/>
      </svg>
    )
  }
  if (icon === "check") {
    return (
      <svg className={"icon check" + classList} width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path fill="#000000" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"/>
      </svg>
    )
  }

  //-------------------------------------------------------------
  if (icon === "bold") {
    return (
      <svg className={"icon bold" + classList} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12H12.5C14.9853 12 17 9.98528 17 7.5C17 5.01472 14.9853 3 12.5 3H6V12ZM6 12H13.5C15.9853 12 18 14.0147 18 16.5C18 18.9853 15.9853 21 13.5 21H6V12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
  if (icon === "italicize") {
    return (
      <svg className={"icon italicize" + classList} width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.357 3l-3.713 18H14v1H6v-1h3.624l3.713-18H10V2h8v1z"/>
        <path fill="none" d="M0 0h24v24H0z"/>
      </svg>
    )
  }
  if (icon === "link") {
    return (
      <svg className={"icon link" + classList} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.7388 4.26118C17.0572 1.57961 12.7095 1.57961 10.0279 4.26118L9.30707 4.98203C9.01418 5.27492 9.01418 5.7498 9.30707 6.04269C9.59997 6.33558 10.0748 6.33558 10.3677 6.04269L11.0886 5.32184C13.1844 3.22605 16.5823 3.22605 18.6781 5.32184C20.7739 7.41763 20.7739 10.8156 18.6781 12.9114L17.9573 13.6322C17.6644 13.9251 17.6644 14.4 17.9573 14.6929C18.2502 14.9858 18.725 14.9858 19.0179 14.6929L19.7388 13.972C22.4203 11.2905 22.4203 6.94276 19.7388 4.26118Z" fill="#1C274C"/>
        <path d="M6.04269 9.30707C6.33558 9.59997 6.33558 10.0748 6.04269 10.3677L5.32184 11.0886C3.22605 13.1844 3.22605 16.5823 5.32184 18.6781C7.41763 20.7739 10.8156 20.7739 12.9114 18.6781L13.6322 17.9573C13.9251 17.6644 14.4 17.6644 14.6929 17.9573C14.9858 18.2501 14.9858 18.725 14.6929 19.0179L13.972 19.7388C11.2905 22.4203 6.94276 22.4203 4.26118 19.7388C1.57961 17.0572 1.57961 12.7095 4.26118 10.0279L4.98203 9.30707C5.27492 9.01418 5.7498 9.01418 6.04269 9.30707Z" fill="#1C274C"/>
        <path d="M14.6928 9.30707C14.9857 9.59997 14.9857 10.0748 14.6928 10.3677L10.3677 14.6928C10.0748 14.9857 9.59997 14.9857 9.30707 14.6928C9.01418 14.3999 9.01418 13.9251 9.30707 13.6322L13.6322 9.30707C13.9251 9.01418 14.3999 9.01418 14.6928 9.30707Z" fill="#1C274C"/>
      </svg>
    )
  }
  if (icon === "numbered-list") {
    return (
      <svg className={"icon numbered-list" + classList} fill="#000000" width="800px" height="800px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
        <path d="M169.412 1355.294c93.402 0 169.412 76.01 169.412 169.412 0 43.595-16.942 82.899-44.16 112.941 27.218 30.042 44.16 69.346 44.16 112.941 0 93.403-76.01 169.412-169.412 169.412H0v-112.941h169.412c31.059 0 56.47-25.412 56.47-56.47 0-31.06-25.411-56.471-56.47-56.471H0v-112.942h169.412c31.059 0 56.47-25.411 56.47-56.47 0-31.059-25.411-56.47-56.47-56.47H0v-112.942ZM1920 1468.235v112.941H564.706v-112.94H1920ZM188.058 677.67c61.78 0 118.814 38.4 145.356 97.694 28.8 64.037 15.36 136.546-35.916 194.033-16.286 18.262-34.108 37.88-52.187 57.582l-3.101 3.377c-2.07 2.252-4.14 4.505-6.213 6.755l-3.108 3.374-3.107 3.37c-28.478 30.87-56.688 61.043-79.672 85.58h188.725v112.94H56.482c-31.285 0-56.47-25.298-56.47-56.47v-39.53c0-14.456 5.533-28.46 15.585-38.964.113-.113 117.459-123.558 197.647-213.233 21.346-23.944 27.445-49.807 17.167-72.621-8.131-18.297-25.637-30.946-42.353-30.946-40.546 0-82.898 48.452-94.418 65.506L.01 792.983C7.804 781.237 80.425 677.67 188.058 677.67ZM1920 903.53v112.94H564.706V903.53H1920ZM169.412 0c31.172 0 56.47 25.299 56.47 56.47v508.236h-112.94V112.94H0V0ZM1920 338.824v112.94H564.706v-112.94H1920Z" fill-rule="evenodd"/>
      </svg>
    )
  }
  if (icon === "list-ul") {
    return (
      <svg className={"icon list-ul" + classList} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }
  if (icon === "heading") {
    return (
      <svg className={"icon heading" + classList} fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M6.25 4a.75.75 0 01.75.75V11h10V4.75a.75.75 0 011.5 0v14.5a.75.75 0 01-1.5 0V12.5H7v6.75a.75.75 0 01-1.5 0V4.75A.75.75 0 016.25 4z"/>
      </svg>
    )
  }
  if (icon === "quote") {
    return (
      <svg className={"icon quote" + classList} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.62231 6.78278C10.0546 6.43909 10.1265 5.81001 9.78277 5.3777C9.43908 4.94539 8.81001 4.87354 8.37769 5.21724C4.73471 8.11342 4 11.8784 4 16C4 17.6569 5.34315 19 7 19C8.65685 19 10 17.6569 10 16C10 14.3432 8.65685 13 7 13C6.71233 13 6.43412 13.0405 6.17076 13.1161C6.5162 10.5872 7.45738 8.50391 9.62231 6.78278ZM20 16C20 17.6569 18.6569 19 17 19C15.3431 19 14 17.6569 14 16C14 11.8784 14.7347 8.11342 18.3777 5.21724C18.81 4.87354 19.4391 4.94539 19.7828 5.3777C20.1265 5.81001 20.0546 6.43909 19.6223 6.78278C17.4574 8.50391 16.5162 10.5872 16.1708 13.1161C16.4341 13.0405 16.7123 13 17 13C18.6569 13 20 14.3432 20 16Z" fill="#000000"/>
      </svg>
    )
  }
  if (icon === "code") {
    return (
      <svg className={"icon code-icon" + classList} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.53001 6.47001C9.38939 6.32956 9.19876 6.25067 9.00001 6.25067C8.80126 6.25067 8.61064 6.32956 8.47001 6.47001L3.47001 11.47C3.32956 11.6106 3.25067 11.8013 3.25067 12C3.25067 12.1988 3.32956 12.3894 3.47001 12.53L8.47001 17.53C8.61064 17.6705 8.80126 17.7494 9.00001 17.7494C9.19876 17.7494 9.38939 17.6705 9.53001 17.53C9.67046 17.3894 9.74935 17.1988 9.74935 17C9.74935 16.8013 9.67046 16.6106 9.53001 16.47L5.06001 12L9.53001 7.53001C9.67046 7.38939 9.74935 7.19876 9.74935 7.00001C9.74935 6.80126 9.67046 6.61064 9.53001 6.47001Z" fill="#000000"/>
        <path d="M20.53 11.47L15.53 6.47003C15.3878 6.33755 15.1998 6.26543 15.0055 6.26885C14.8112 6.27228 14.6258 6.35099 14.4884 6.48841C14.351 6.62582 14.2723 6.81121 14.2688 7.00551C14.2654 7.19981 14.3375 7.38785 14.47 7.53003L18.94 12L14.47 16.47C14.3296 16.6107 14.2507 16.8013 14.2507 17C14.2507 17.1988 14.3296 17.3894 14.47 17.53C14.6106 17.6705 14.8013 17.7494 15 17.7494C15.1988 17.7494 15.3894 17.6705 15.53 17.53L20.53 12.53C20.6705 12.3894 20.7494 12.1988 20.7494 12C20.7494 11.8013 20.6705 11.6107 20.53 11.47Z" fill="#000000"/>
      </svg>
    )
  }
  if (icon === "code-block") {
    return (
      <svg className={"icon code-block-icon" + classList} width="800px" height="800px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 15L8.5 12.5L11 10M14 10L16.5 12.5L14 15M5.5 6.5H19.5V18.5H5.5V6.5Z" stroke="#121923" stroke-width="1.2"/>
      </svg>
    )
  }
  if (icon === "embed") {
    return (
      <svg className={"icon embed" + classList} width="800px" height="800px" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg">
        <defs><style>{".cls-1{fill:none;stroke:#083b43;stroke-linecap:round;stroke-linejoin:round;stroke-width:20px;}"}</style></defs><title/><polygon class="cls-1" points="233.49 262.5 144 351.98 315.57 286.56 278.51 249.5 368 160.02 200 224.08 233.49 262.5"/>
      </svg>
    )
  }
  if (icon === "photo") {
    return (
      <svg className={"icon check" + classList} height="800px" width="800px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <style type="text/css">
        {".st0{fill:#000000;}"}
      </style>
      <g>
        <path class="st0" d="M0,45.178v421.644h512V45.178H0z M471.841,426.662H40.159V85.329h431.682V426.662z"/>
        <path class="st0" d="M326.128,207.728c-4.148-6.289-11.183-10.077-18.72-10.069c-7.544,0.007-14.57,3.803-18.71,10.1
          l-72.226,109.914l-39.862-45.178c-4.619-5.238-11.426-8.022-18.397-7.52c-6.971,0.486-13.308,4.211-17.142,10.053L74.17,376.96
          h363.659L326.128,207.728z"/>
        <path class="st0" d="M174.972,230.713c25.102,0,45.453-20.35,45.453-45.461c0-25.102-20.35-45.452-45.453-45.452
          c-25.11,0-45.46,20.35-45.46,45.452C129.511,210.363,149.862,230.713,174.972,230.713z"/>
      </g>
      </svg>
    )
  }
}

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

export default Icon;
