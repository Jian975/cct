function SectionTitle (props) {
    return (
        <div className="SectionTitle">
            <h2 className="CH">{props.Chinese}</h2>
            <h3 className="EN">{props.English}</h3>
        </div>
    )
}
export default SectionTitle;
