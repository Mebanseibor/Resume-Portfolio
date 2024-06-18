import './Projects.css';
import { PROJECTS } from '../../constants/projects';
import Project from './Project/Project';

function Projects(){
    return(
        <div className = "projects_container">
            {Object.values(PROJECTS).map(function(element){
                return(
                    <Project
                        key = {element.Name}
                        Name = {element.Name}
                        DescriptionShort = {element.DescriptionShort}
                        DescriptionLong = {element.DescriptionLong}
                        LinkeLive = {element.LinkLive}
                        LinkAbout = {element.LinkAbout}
                    />
                )
            })}
        </div>
    );
};

export default Projects;