import React from "react";

interface ProgressBarProps {
  bgColor: string;
  completed: number;
}

const ProgressBar = (props: ProgressBarProps) => {
  const { bgColor, completed } = props;

  const containerStyles = {
    height: 20,
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 20,
    overflow: "hidden",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed > 100 ? 100 : completed}%`,
    backgroundColor: bgColor,
    borderRadius: "inherit",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
