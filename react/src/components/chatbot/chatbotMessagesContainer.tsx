import React from "react";
import { useState } from "react";

export const ChatbotMessagesContainer = () => {
  const [chatbotInputs, setChatbotInputs] = useState([]);

  React.useEffect(() => {
    //Get user inputs from LocalStorage
    setChatbotInputs(JSON.parse(localStorage.getItem("chatbotInputs") || "[]"));

    //EventListener running and checking if any updates to LocalStorage.
    window.addEventListener("storage", () => {
      console.log("New user input");
      //Get latest user input from LocalStorage
      setChatbotInputs(
        JSON.parse(localStorage.getItem("chatbotInputs") || "[]")
      );
    });
  }, []);

  return (
    <div className="chatbot-content-container">
      {chatbotInputs.map((input: any, index: number) => {
        return (
          <div
            className={
              input.author == "Chatbot"
                ? "chatbot-reciever-message-container "
                : "chatbot-sent-message-container"
            }
            key={index}
          >
            <div
              className={
                input.author == "Chatbot"
                  ? "chatbot-reciever-message"
                  : "chatbot-sent-message"
              }
            >
              {input.message}
            </div>
          </div>
        );
      })}
    </div>
  );
};
