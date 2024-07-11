import "./Button.css"

function Button(props) {
  return (
    <button className="custom-button">
        {props.children}
    </button>
  );
}

export function DarkenButton(props) {
  return (
    <button className="custom-darken-button custom-button">
        {props.children}
    </button>
  );
}

export function UsernameButton(props) {
  return (
    <button className="username-button">
        {props.children}
    </button>
  );
}

export default Button;
