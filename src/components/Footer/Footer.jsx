import './Footer.css';

import PageContent from './Links/Page Content/PageContent';

import {CONTACTME} from '../../constants/index';
import ContactMe from './ContactMe/ContactMe';

function Footer(){
    return(
        <div className = "footer_container">
            <div className = "footer_links">
                <div className = "footer_links_column">
                    <PageContent/>
                </div>
            </div>
            <div>
                <div className = "footer_contactme">
                    {Object.values(CONTACTME).map(function(element, index){
                        return(
                            <ContactMe
                                key = {element.name}
                                name = {element.name}
                                url = {element.url}
                                icon = {element.icon}
                                iconText = {element.iconText}
                            />
                        );
                    })}
                </div>
            </div>
            <div className = "footer_creators">Created by Mebanseibor Lyngdoh</div>
        </div>
    );
};

export default Footer