import { useState } from "react";
import './ChatInput.css'

export function ChatInput({chatResponses, setChatResponses}){

    const [inputText, setInputText] = useState("");

    function saveInputChange(event){
        setInputText(event.target.value);
    }

    function sendResponse(){
        const updatedChatResponses = 
            [
                ...chatResponses,
                {sender: "user", response: inputText, id: crypto.randomUUID()}
            ]
        setChatResponses(updatedChatResponses);
        setInputText("");
    }
    return(
        <div className="chatbot-input-container">
            <input 
            className="chatbot-input"
            onChange={saveInputChange} 
            placeholder="Enter your query" 
            value={inputText}
            size={20}/>
            <button className="chatbot-button" onClick={sendResponse}>Send</button>
        </div>
    );
}