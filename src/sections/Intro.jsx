import Header from "./Header";
import "./Intro.css";

function Intro() {
    return (
        <div className="Intro">
           <img id="Intro-BgImg"></img>
            <Header />
            <div id="Intro-Group">
                <div id="Intro-Group-ClubName">
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div id="Intro-Group-Photo">
                    <div id="Intro-Group-Photo-Bg" />
                    <div id="Intro-Group-Photo-Img" />
                </div>
            </div>
            <div id="Intro-Group-Mission">
                <div id="Intro-Group-Mission-Divider" />
                <div id="Intro-Group-Mission-Statement">
                    <div className="Language-CH"></div>
                    <div className="Language-EN"></div>    
                </div>
            </div>
        </div>
    )
}
export default Intro;