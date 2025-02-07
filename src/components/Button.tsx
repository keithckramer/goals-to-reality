import React from "react";
import "../styles/Button.scss"

interface ButtonProps {
    onClick: () => void;
    label: string;
    type?: "button" | "submit";
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, type = "button", className = "" }) => {
  return (
      <button type={type} className={`button ${className}`} onClick={onClick}>
          {label}
      </button>
  );
};


export default Button;