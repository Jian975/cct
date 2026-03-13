import ImgButton from "../components/ImgButton";

import Email from "../assets/icons/emailIcon.png";
import CampusGroup from "../assets/icons/campusGroup.png";
import "./Header.css";

function Header() {
    return (
        <div className="Header">
            <div id="Header-Nav">
                <a className="Header-Nav-Group" href="#About">
                    <h3 className="Header-Nav-Group-Desc-CH">关于</h3>
                    <div className="Header-Nav-Group-Desc-Border" />
                    <h3 className="Header-Nav-Group-Desc-EN">About</h3>
                </a>
                <a className="Header-Nav-Group" href="#Contact">
                    <h3 className="Header-Nav-Group-Desc-CH">联系</h3>
                    <div className="Header-Nav-Group-Desc-Border" />
                    <h3 className="Header-Nav-Group-Desc-EN">Contact</h3>
                </a>
            </div>
            <div id="Header-Links">
                <ImgButton href={"mailto:"} img={Email} />
                <ImgButton href={"https://campusgroups.rit.edu/CCT/"} img={CampusGroup} />
            </div>
        </div>
    )
}
export default Header;