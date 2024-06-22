import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./ToggleButtonPage.css";

function ButtonPage() {
  const [isOn, setIsOn] = useState(false);
  const userId = "JE3TgOR2QjMBwwalSgybey8T9x22"; // Replace with your actual user ID

  const toggleButton = () => {
    const newCommand = isOn ? "OFF" : "ON";

    axios
      .post("http://localhost:5000/api/toggle-control-command", {
        userId: userId,
        command: newCommand,
      })
      .then((response) => {
        if (response.data.success) {
          setIsOn(!isOn); // Update local state based on successful backend update
        } else {
          console.error(
            "Failed to update control command:",
            response.data.error
          );
        }
      })
      .catch((error) => {
        console.error("Error updating control command:", error);
      });
  };

  return (
    <div className="toggle-button-container">
      <h2>Engine On/Off</h2>
      <button
        className={`toggle-button ${isOn ? "active" : ""}`}
        onClick={toggleButton}
      >
        <FontAwesomeIcon
          icon={isOn ? faToggleOn : faToggleOff}
          className="toggle-icon"
        />
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default ButtonPage;
