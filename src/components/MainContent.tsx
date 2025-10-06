import { BusinessNewsFeed } from "./BusinessNewsFeed";
import { Chatbot } from "./Chatbot";

import './MainContent.css';

export function MainContent(){
    return(
        <div className="main-content">
            <BusinessNewsFeed content="Business News Feed Content..."/>
            <Chatbot/>
        </div>
    );
}