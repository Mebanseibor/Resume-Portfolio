import './NavbarRight.css';

import Links from './Links/Links';
import { NAVBARLINKS } from '../../../constants';


export default function NavbarRight(){
    return(
        <div className = "navbarright_container">
            {Object.values(NAVBARLINKS).map(function(element){
                return(
                    <Links
                        key = {element.Name}
                        Name = {element.Name}
                        URL = {element.URL}
                    />
                )
            })}
        </div>
    )
}