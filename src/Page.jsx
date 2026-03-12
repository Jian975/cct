import About from "./sections/About";
import Activities from "./sections/Activities";
import Contact from "./sections/Contact";
import Events from "./sections/Events";
import Intro from "./sections/Intro";

function Page() {
    return(
        <div className="Page">
            <p>Page has loaded.</p>
            <Intro/>
            <About/>
            <Events/>
            <Activities/>
            <Contact/>
        </div>
    )
}
export default Page;