import "./TextScroll.css";

function TextScroll(props) {
    if (props.Align == "Right") {
        return (
            <div className="TextScroll">
                <div className="TextScroll-Divider"/>
                <p className={"TextScroll-Desc TextScroll-R " + props.Language}>{props.Text}</p>
            </div>
        )
    } else {
        return (
            <div className="TextScroll">
                <p className={"TextScroll-Desc TextScroll-L " + props.Language}>{props.Text}</p>
                <div className="TextScroll-Divider" />
            </div>
        )
    }
    
}
export default TextScroll;
