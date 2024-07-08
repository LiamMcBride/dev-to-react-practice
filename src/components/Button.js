import Icon from "./Icon";
import "./Button.css"

function Button(props) {
  return (
    <button>
        {props.children}
    </button>
  );
}

export default Button;
