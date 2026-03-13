function TextScroll(props) {
    if (props.Align == "Right") {
        return (
            <div className="TextScroll">
                <div className="TextScroll-Divider"/>
                <p className="TextScroll-Desc-R"></p>
            </div>
        )
    } else {
        return (
            <div className="TextScroll">
                <p className="TextScroll-Desc-L"></p>
                <div className="TextScroll-Divider" />
            </div>
        )
    }
    
}
export default TextScroll;
