import './Project.css';

export default function Project(prop){
    return(
        <div className = "project_container">
                <a className = "projects_project_title" href = {prop.LinkAbout} target="_blank">
                    {prop.Name}
                </a>
                <p className = "projects_project_description">{prop.DescriptionShort}</p>
        </div>
    )
};