import './Links.css';

export default function Links(prop){
    return(
        <div className="links">
            <a href={prop.URL}>{prop.Name}</a>
        </div>
    );
};