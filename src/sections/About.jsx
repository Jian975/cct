import ImgDisplay from "../components/ImgDisplay";
import TextScroll from "../components/TextScroll";

function About() {
    return (
        <div className="About">
            <div id="About-Title">
                <h1 id="CH"></h1>
                <h1 id="EN"></h1>
            </div>
            <div id="About-Content">
                {/* <TextScroll 
                    Language="CH"
                    Align="Left"
                    Text="我们是来自罗切斯特理工学院的一个学生社团。每个星期三8点和星期五5点，我们会在EAS-3379聚集. 无论你的水平如何，我们都欢迎你加入我们!"
                    Font="YRDZST"
                    Size={24}/> */}
                <div id="About-Content-ImgGroup">
                    <ImgDisplay />
                    <ImgDisplay />
                    <ImgDisplay />
                </div>
                {/* <TextScroll /> */}
            </div>
        </div>
    )
}
export default About;