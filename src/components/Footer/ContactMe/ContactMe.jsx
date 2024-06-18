import './ContactMe.css';

// import { CONTACTME } from '../../../constants';

export default function ContactMe(prop){
    return(
        <div className = "contactme_container">
            <a href={prop.url} target="_blank">
                <img className = "contactme_media_icon" src = {prop.icon}>
                </img>
            </a>
        </div>
    )
};