import { useState } from "react";
import React from "react";
import Button from "@ingka/button";
import Switch from "@ingka/switch";

export const ChatbotSettings = ({
  onSave,
  setDarkMode,
}: {
  onSave: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkMode: React.Dispatch<React.SetStateAction<string>>;
}) => {
  // Handle dark mode settings toggle
  const [darkmode, setDarkmode] = useState<boolean>(false);

  //Check for user saved settings
  React.useEffect(() => {
    //Get user saved settings from localStorage
    localStorage.getItem("darkmode")
      ? setDarkmode(JSON.parse(localStorage.getItem("darkmode") || ""))
      : setDarkmode(false);
  }, []);

  //Handle switch toggle
  const handleDarkmode = () => {
    setDarkmode(!darkmode);
    //Check if dark mode
    if (!darkmode) {
      document.body.classList.add("dark");
      setDarkMode("dark");
    } else {
      document.body.classList.remove("dark");
      setDarkMode("light");
    }
    console.log(!darkmode);
    // //Store settings in localStorage
    localStorage.setItem("darkmode", JSON.stringify(!darkmode));
  };

  return (
    <>
      <div className="chatbot-content-settings-container">
        <div className="chatbot-content-settings-alertbox">
          <div className="chatbot-content-settings">
            <p>IKEA Chat settings</p>
            <div className="chatbot-content-settings-actions">
              <Switch
                id="chatbot-settings-switch-mode"
                value="chatbot-mode"
                label="Dark Mode"
                onChange={handleDarkmode}
                checked={darkmode}
              />
            </div>
            <Button
              type="primary"
              text="Save"
              fluid
              onClick={() => onSave(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
