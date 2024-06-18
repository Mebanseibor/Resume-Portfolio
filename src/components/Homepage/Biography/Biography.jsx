import './Biography.css';
import { COMPONENT_BIOGRAPHY } from '../../../constants';

export default function Biography(){
    return (
        <div className = "biography" id = "biography">
            <h4 className = "biography_title">{COMPONENT_BIOGRAPHY.title}</h4>
            <p className = "biography_description">{COMPONENT_BIOGRAPHY.description}</p>
        </div>
    )
}