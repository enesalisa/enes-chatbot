import { useState } from "react";
import React from "react";
import Chatbot from "./layouts/Chatbot";
import InitChatbot from "./components/initChatbot";
import "./index.css";
import "./layouts/Chatbot.scss";
import "./layouts/_skapa-dark-mode.css";
import "./layouts/themes.scss";

function App() {
  //useStates
  const [chatbotView, setChatbotView] = useState<boolean>(true); //Chatbot visible state

  //Check for user saved settings
  React.useEffect(() => {
    //Get user saved settings from localStorage
    localStorage.getItem("chatbotView")
      ? setChatbotView(JSON.parse(localStorage.getItem("chatbotView") || ""))
      : setChatbotView(true);

    //Check dark mode setting and apply
    localStorage.getItem("darkmode") == "true"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, []);

  //Handle chatbot view
  const handleClick = () => {
    setChatbotView(!chatbotView);
    // //Store settings in localStorage
    localStorage.setItem("chatbotView", JSON.stringify(!chatbotView));
  };

  return (
    <>
      {chatbotView ? (
        <Chatbot onClose={handleClick} />
      ) : (
        <InitChatbot onClick={handleClick} />
      )}
    </>
  );
}

export default App;
