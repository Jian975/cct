import Header from "./Header";

import BgImg from "../assets/bg.png";
import GroupPhoto from "../assets/GroupPhoto.jpg";
import "./Intro.css";

function Intro() {
    return (
        <div className="Intro">
            <div id="Intro-BgImg-Group">
                <img src={BgImg}></img>
            </div>
            <Header />
            <div id="Intro-Group">
                <div id="Intro-Group-ClubName">
                    <h1 id="Intro-Group-ClubName-CH">中文角</h1>
                    <h2 id="Intro-Group-ClubName-EN">Chinese Conversation Table</h2>
                    <h3 id="Intro-Group-ClubName-Times">Wed 7PM | Fri 5PM | EAS-3379</h3>
                </div>
                <div id="Intro-Group-Photo">
                    <div id="Intro-Group-Photo-Bg">
                        <img src={GroupPhoto}></img>
                    </div>
                </div>
            </div>
            <div id="Intro-Group-Mission">
                <div id="Intro-Group-Mission-Divider" />
                <div id="Intro-Group-Mission-Statement">
                    <div className="Left-Scroll"></div>
                    <div className="Right-Scroll"></div>    
                </div>
            </div>
        </div>
    )
}
export default Intro;