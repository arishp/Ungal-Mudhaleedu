import { useRef, useEffect } from "react";
import { ChatResponse } from "./ChatResponse";

import './ChatResponses.css'

export function ChatResponses({chatResponses}){
    const chatResponsesRef = useRef(null);
    useEffect(
        () => {
            const containerElement = chatResponsesRef.current;
            containerElement.scrollTop = containerElement.scrollHeight;
        },
        [chatResponses]
    )
    return(
        <div className="chat-responses-container" ref={chatResponsesRef}>
            {
                chatResponses.map(
                    (chatResponse) => 
                    <ChatResponse 
                    sender={chatResponse.sender} 
                    message={chatResponse.response}
                    key={chatResponse.id}/>
                )
            }
        </div>
    );
}