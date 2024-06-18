import "./PageContent.css";

import { HOMEPAGE_PAGETOPICS } from "../../../../constants";

export default function PageContent(prop){
    return(
        <div className = "pagecontent_container">
            <h5 className = "pagecontent_title">Page Content</h5>
            <div className = "footer_links_column_items">
                <a href={HOMEPAGE_PAGETOPICS[0].url}>{HOMEPAGE_PAGETOPICS[0].name}</a>
                <a href={HOMEPAGE_PAGETOPICS[1].url}>{HOMEPAGE_PAGETOPICS[1].name}</a>
                <a href={HOMEPAGE_PAGETOPICS[2].url}>{HOMEPAGE_PAGETOPICS[2].name}</a>
            </div>        
        </div>
    );
}