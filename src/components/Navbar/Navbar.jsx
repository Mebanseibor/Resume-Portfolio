import "./Navbar.css";
import { THEME } from "../../constants";
import NavbarRight from "./NavbarRight/NavbarRight";

function Navbar(){
    return(
        <div className="navbar_container">
            <div className="navbar_left">
                <p>Mebanseibor Lyngdoh</p>
            </div>
            <NavbarRight />
        </div>
    );
};

export default Navbar;