import Icon, { IconButton } from './Icon';
import './TextArea.css';
import {useRef, useState} from 'react'
import { AccentButton, SecondaryButton } from './Button.js'

function TextArea() {

    const textRef = useRef(null)
    const [window, setWindow] = useState(false)

    const handleBold = (repText, rep2Text="") => {
        setWindow(false)
        
        if (rep2Text === ""){
            rep2Text = repText
        }

        var sel = getSelection()
        var selText = sel.toString()

        sel.deleteFromDocument()

        var pos = textRef.current.selectionStart
        var pos_2 = textRef.current.selectionEnd
        var before = textRef.current.value.substring(0, pos)
        var after = textRef.current.value.substring(pos_2, textRef.current.value.length)
        // console.log(`Before: ${before}\nAfter: ${after}\nPos: ${pos}\nPos2: ${pos_2}`)
        textRef.current.value = before + repText + selText + rep2Text + after
    }

    const MoreWindow = () => {
        return (
            <div className="more-window">
                <IconButton handleClick={() => handleBold("<u>", "</u>")} icon="underline" shape="square icon-40"/>
                <IconButton handleClick={() => handleBold("~~")} icon="strikethrough" shape="square icon-40"/>
                <IconButton handleClick={() => handleBold("\n\n---\n", "\n")} icon="separator" shape="square icon-40"/>
                <IconButton icon="help" shape="square icon-40"/>
            </div>
        )
    }

    //Hi my name is Liam and this is my text editor
    const ToolBar = () => {
        return (
            <div className="toolbar">
                <IconButton handleClick={() => handleBold("**")} icon="bold" shape="square icon-40"/>
                <IconButton handleClick={() => handleBold("_")} icon="italicize" shape="square icon-40"/>
                <IconButton handleClick={() => handleBold("[","](url)")} icon="link" shape="square icon-40"/>
                <IconButton handleClick={() => handleBold("\n\n1. ","\n")} icon="numbered-list" shape="square icon-40"/>
                <IconButton handleClick={() => handleBold("\n\n- ","\n")} icon="list-ul" shape="square icon-40"/>
                <IconButton handleClick={() => handleBold("\n\n## ","\n")} icon="heading" shape="square icon-40"/>
                <IconButton handleClick={() => handleBold("\n\n> ","\n")} icon="quote" shape="square icon-40"/>
                <IconButton handleClick={() => handleBold("`")} icon="code" shape="square icon-40"/>
                <IconButton handleClick={() => handleBold("\n\n```\n", "\n```\n")} icon="code-block" shape="square icon-40"/>
                <IconButton handleClick={() => handleBold("{% embed ", " %}")} icon="embed" shape="square icon-40"/>
                {/* <IconButton handleClick={() => handleBold("**")} icon="photo" shape="square icon-40"/> */}
                <IconButton handleClick={() => setWindow(!window)} icon="more" shape="square icon-40 right"/>
                {window ? <MoreWindow /> : null}
            </div>
        )
    }

    


  return (
    <div className="custom-textarea">
        <textarea placeholder="Add to the discussion" ref={textRef}></textarea>
        <ToolBar />
        <div className="comment-buttons">
            <AccentButton>Submit</AccentButton>
            <SecondaryButton>Preview</SecondaryButton>
        </div>
        
    </div>
  );
}

export default TextArea;
