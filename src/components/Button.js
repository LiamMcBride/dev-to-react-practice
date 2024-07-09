import "./Button.css"

function Button(props) {
  return (
    <button className="custom-button">
        {props.children}
    </button>
  );
}

export default Button;
