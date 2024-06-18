import './Techstack.css';
import { TECHSTACK_ROW1, TECHSTACK_ROW2 } from '../../constants/techstack';

import Tech from './Tech/Tech';

function Techstack(){
    return(
      <div className = "techstack_container">
        <div className = "techstack_row">
        {TECHSTACK_ROW1.map(function(element, index){
            return(
                <Tech
                    key = {element.Name}
                    Name = {element.Name}
                    icon = {element.icon}
                    iconAltText = {element.iconAltText}
                />
            )
        })}
        </div>

        <div className = "techstack_row">
        {TECHSTACK_ROW2.map(function(element, index){
            return(
                <Tech
                    key = {element.Name}
                    Name = {element.Name}
                    icon = {element.icon}
                    iconAltText = {element.iconAltText}
                />
            )
        })}
        </div>
    </div>
    );
};

export default Techstack;