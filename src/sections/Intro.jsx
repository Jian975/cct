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
                    <h1 className="CH">中文角</h1>
                    <h2 className="EN">Chinese Conversation Table</h2>
                    <h3 id="Intro-Group-ClubName-Times" className="EN">Wed 7PM | Fri 5PM | EAS-3379</h3>
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
                    <div id="Intro-Group-Mission-Statement-CH" className="CH">我们的使命是将汉语学习者和母语人士聚集在一起,以促进语言练习和文化交流。</div>
                    <div id="Intro-Group-Mission-Statement-EN" className="EN">Our mission is to bring together Mandarin speakers of all levels to practice our language skills and learn about each other’s culture. </div>    
                </div>
            </div>
        </div>
    )
}
export default Intro;