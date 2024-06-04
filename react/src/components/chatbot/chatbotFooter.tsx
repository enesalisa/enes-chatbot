import { useState } from "react";

//Define User inputs type
type UserInputs = {
  author: string;
  message: string;
};

//Array: store user inputs
let userInputsArr: UserInputs[] = [];

export const ChatbotFooter = () => {
  //State manager
  //State containing chatbotInputs. Both user and chatbot inputs
  const [chatbotInputs, setChatbotInputs] = useState({
    author: "",
    message: "",
  });
  //State containing chatbot textarea value
  const [textarea, setTextarea] = useState("");
  const [chatbotLogic, setChatbotLogic] = useState(1);

  // Send message function that posts message either by button or key: enter
  function sendMessage() {
    //Get prev user inputs from LocalStorage
    userInputsArr = JSON.parse(localStorage.getItem("chatbotInputs") || "[]");

    // Check if message is empty
    if (chatbotInputs.message) {
      userInputsArr.push({
        author: chatbotInputs.author,
        message: chatbotInputs.message,
      });

      // DEMO chatbot logic since no NLU model is used for chatbot in this frontend example
      if (chatbotLogic == 1) {
        setChatbotLogic(2);
        //Chatbot second message
        userInputsArr.push({
          author: "Chatbot",
          message: "How can I help you?",
        });
      } else if (chatbotLogic == 2) {
        setChatbotLogic(3);
        //Chatbot second message
        userInputsArr.push({
          author: "Chatbot",
          message: "I will try to assist you with your issue.",
        });
      }

      //Save user inputs to LocalStorage
      localStorage.setItem("chatbotInputs", JSON.stringify(userInputsArr));
      window.dispatchEvent(new Event("storage"));
    }
  }

  //If key: enter is pressed, send message.
  const onKeyEnter = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      sendMessage();
      setTextarea(""); //Clear textarea value
    }
  };

  return (
    <div className="chatbot-footer">
      <form className="chatbot-textarea">
        <textarea
          id="chatbot-textarea-input"
          className="chatbot-textarea-input"
          placeholder="Write your message here."
          value={textarea}
          onKeyDown={(e) => onKeyEnter(e)} //Verify key, if key: enter
          onChange={(e) => {
            setChatbotInputs({
              ...chatbotInputs,
              author: "user",
              message: e.target.value,
            });
            setTextarea(e.target.value);
          }}
        ></textarea>
        <div className="chatbot-textarea-buttons">
          <button
            className="button-chatbot-send"
            onClick={(e) => {
              e.preventDefault();
              sendMessage();
              setTextarea(""); // Clear textarea value
            }}
          ></button>
        </div>
      </form>
    </div>
  );
};
