import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatResponse.css'

export function ChatResponse({sender, message}){
    return(
        <div className={
            sender=="robot"
                ?
                "chatbot-response-robot"
                :"chatbot-response-user"
        }>
            {sender=="robot" && (
                <img className="chat-response-profile" src={RobotProfileImage}/>
            )}
            <div className="chatbot-response-text">
                {message}
            </div>
            {sender=="user" && (
                <img className="chat-response-profile" src={UserProfileImage}/>
            )}
        </div>
    );
}