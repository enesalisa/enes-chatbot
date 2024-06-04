import { useState } from "react";
import { ChatbotHeader } from "../components/chatbot/chatbotHeader";
import { ChatbotMessagesContainer } from "../components/chatbot/chatbotMessagesContainer";
import { ChatbotFooter } from "../components/chatbot/chatbotFooter";
import { ChatbotSettings } from "../components/chatbot/chatbotSettings";

// Close button => Void
type ParentProps = {
  onClose: () => void;
};
//Define Chatbot inputs type
type ChatbotInputs = {
  author: string;
  message: string;
};

function Chatbot({ onClose }: ParentProps) {
  //State manager: settings
  const [settingsView, setSettingsView] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<string>(() => {
    //Set dark mode to user saved setting
    if (localStorage.getItem("darkmode") == "true") {
      return "dark";
    } else {
      return "light";
    }
  });

  //Check if conversation is not ongoing
  if (!localStorage.getItem("chatbotInputs")) {
    //Array: store chatbot inputs
    let chatbotInputsArr: ChatbotInputs[] = [];

    chatbotInputsArr.push({
      author: "Chatbot",
      message: "Welcome to the IKEA chatbot!",
    });
    chatbotInputsArr.push({
      author: "Chatbot",
      message: "What is your name?",
    });

    //Save chatbot inputs to LocalStorage
    localStorage.setItem("chatbotInputs", JSON.stringify(chatbotInputsArr));
  }

  //Handle chatbot settings view
  const displaySettings = () => {
    setSettingsView(!settingsView);
  };

  return (
    <div className="chatbot-box" data-theme={darkMode}>
      <ChatbotHeader onClose={onClose} onSettings={displaySettings} />
      <ChatbotMessagesContainer />
      {settingsView && (
        <ChatbotSettings onSave={displaySettings} setDarkMode={setDarkMode} />
      )}
      <ChatbotFooter />
    </div>
  );
}

/**********************************************
 *
 *  I look forward to work with your team! :)
 *  - Enes Alisa
 *
 **********************************************/

export default Chatbot;
