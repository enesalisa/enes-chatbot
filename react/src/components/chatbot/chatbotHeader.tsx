import SSRIcon from "@ingka/ssr-icon";
import speechBubble from "@ingka/ssr-icon/paths/speech-bubble";
import cross from "@ingka/ssr-icon/paths/cross";
import chevronDown from "@ingka/ssr-icon/paths/chevron-down";
import ellipsesVertical from "@ingka/ssr-icon/paths/ellipses-vertical";
import Button from "@ingka/button";
import { ClearLocalStorage } from "../../Utils/clearLocalStorage";
import { useState } from "react";

export const ChatbotHeader = ({
  onClose,
  onSettings,
}: {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  onSettings: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [closeWindow, setCloseWindow] = useState(false);
  return (
    <div className="chatbot-header">
      <SSRIcon paths={speechBubble} className="chatbot-header-icon" />
      <p className="chatbot-header-title">
        <b>IKEA Chat</b>
      </p>
      <SSRIcon
        paths={ellipsesVertical}
        className="chatbot-header-settings"
        onClick={() => onSettings(true)}
      />
      <SSRIcon
        paths={chevronDown}
        className="chatbot-header-down"
        onClick={() => onClose(true)}
      />
      <SSRIcon
        paths={cross}
        className="chatbot-header-close"
        onClick={() => {
          setCloseWindow(true);
        }}
      />
      {closeWindow && (
        <div className="chatbot-content-settings-container">
          <div className="chatbot-content-settings-alertbox">
            <div className="chatbot-content-settings">
              <p>Are you sure you want to end the chat conversation?</p>
              <div className="chatbot-content-settings-actions">
                <Button
                  type="primary"
                  text="End chat"
                  fluid
                  onClick={() => {
                    ClearLocalStorage("chatbotInputs"); //Call util to clear localStorage
                    onClose(true); //Close chatbot window
                  }}
                />
                <Button
                  type="secondary"
                  text="Continue chat"
                  fluid
                  onClick={() => {
                    setCloseWindow(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
