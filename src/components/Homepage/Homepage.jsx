import "./Homepage.css";
import { HOMEPAGE_PAGETOPICS } from "../../constants";

import Biography from "./Biography/Biography";
import Techstack from "../Techstack/Techstack";
import Projects from "../Projects/Projects";


function Homepage(){
    return(
        <div className = "homepage_container">
            <Biography />
            <div className = "homepage_technicalskills"  id = "technicalskills">
                <h4 className = "homepage_technicalskills_title">{HOMEPAGE_PAGETOPICS[1].name}</h4>
                <Techstack />
            </div>
            <div className = "homepage_projects" id = "projects">
                <h4 className = "homepage_projects_title">{HOMEPAGE_PAGETOPICS[2].name}</h4>
                <Projects />
            </div>
        </div>
    );
};

export default Homepage;

                
// - Technical Skills
// - Projects
// - Certificates
// - Achievements
// - Education History
// - Linguistic Languages