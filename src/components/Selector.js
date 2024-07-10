import "./Selector.css"
import { useState } from "react";
import Icon, { IconButton } from "./Icon";


function SelectorWindow({options, current, handleChange}) {

    
    //24 by 24 with right 8px margin
    return (
        <div className="selector-window">
            <h3>Sort discussion:</h3>
            {options.map((item, i) => {
                return (
                    <button onClick={handleChange} value={i} className="selector-option">
                        <h3 value={i}>{item}</h3>
                        <p value={i}>Most upvoted and relevant comments will be first</p>
                        {i == current ? <Icon icon="check" size="icon-24"/> : null}
                    </button>
                )
            })}
        </div>
    )
}

function Selector({options, amt, handleChange}) {
    const [current, setCurrent] = useState(0);
    const [window, setWindow] = useState(false);
    return (
        <div className="selector">
            <h2>{options[current]} comments ({amt})</h2>
            <IconButton icon="select" shape="square" handleClick={() => {setWindow(!window)}}/>
            {window ? <SelectorWindow handleChange={(e) => {setCurrent(Number(e.currentTarget.value)); setWindow(false)}} options={options} current={current}/> : null}
        </div>
    )
}

export default Selector;
