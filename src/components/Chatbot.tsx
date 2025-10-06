import { useState } from "react";
import { ChatResponses } from "./ChatResponses";
import { ChatInput } from "./ChatInput";

import './Chatbot.css';

export function Chatbot(){
    const [chatResponses, setChatResponses] = useState(
        [
            {sender: "robot", response: "Hello from your Chatbot...", id:crypto.randomUUID()}
        ]
    );
    return(
        <div className="chatbot-container">
            <ChatResponses
              chatResponses={chatResponses}/>
            <ChatInput
              chatResponses={chatResponses} 
              setChatResponses={setChatResponses} />
        </div>
    );
}
