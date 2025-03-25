
import React, { useState, useEffect } from "react";
import "./CountdownLightSwitch.css"; // Create this file for styling

const CountdownLightSwitch = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);

  // Theme toggle function
  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  // Countdown timer logic
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className={isLightTheme ? "light-theme" : "dark-theme"}>
      <button onClick={toggleTheme}>
        Switch to {isLightTheme ? "Dark" : "Light"} Mode
      </button>
      <div className="countdown">
        <p>Time Left: {timeLeft} seconds</p>
        <div className="progress-bar">
          <div style={{ width: `${(timeLeft / 30) * 100}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default CountdownLightSwitch;