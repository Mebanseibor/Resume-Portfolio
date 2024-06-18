import '../Tech/Tech.css';

function Tech(prop){
    return(
        <div className = "techstack_tech">
            <h3 className = "techstack_tech_title">{prop.Name}</h3>
            <img src = {prop.icon}></img>
        </div>
    )
};




export default Tech