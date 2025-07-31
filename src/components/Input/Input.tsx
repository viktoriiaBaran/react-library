import "./input.css";
import { useState, useRef } from "react";
import { Eye, EyeOff, X, Check, AlertCircle } from "lucide-react";

type InputProps = {
  type?: "text" | "password" | "number" | "email";
  clearable?: boolean;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  error?: string;
  success?: boolean;
  variant?: "default";
  className?: string;
};

export const Input = ({
  type = "text",
  clearable = false,
  placeholder = "",
  label = "",
  disabled = false,
  error = "",
  success = false,
  variant = "default",
  className = "",
}: InputProps) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const inputType = type === "password" && showPassword ? "text" : type;

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={`input-container ${className}`}>
      {/* Floating Label */}
      {label && (
        <label
          className={`
              floating-label
              ${isFocused || value ? "up" : "down"}
              ${isFocused && !error ? "focused" : ""}
              ${error ? "error" : ""}
              ${success ? "success" : ""}
            `}
          onClick={() => inputRef.current?.focus()}
        >
          {label}
        </label>
      )}

      <div className="input-wrapper">
        {/* Input Field */}
        <input
          ref={inputRef}
          type={inputType}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={isFocused ? placeholder : ""}
          disabled={disabled}
          className={`
              input-field
              input-${variant}
              ${label ? "input-with-label" : ""}
              ${error ? "error animate-shake" : ""}
              ${success ? "success" : ""}
            `}
        />

        {/* Icons Container */}
        <div className="icons-container">
          {/* Success Icon */}
          {success && (
            <div className="animate-scaleIn">
              <Check size={18} style={{ color: "#10b981" }} />
            </div>
          )}

          {/* Error Icon */}
          {error && (
            <div className="animate-shake">
              <AlertCircle size={18} style={{ color: "#ef4444" }} />
            </div>
          )}

          {/* Clear Button */}
          {clearable && value && !disabled && (
            <button onClick={() => setValue("")} type="button">
              <X size={16} />
            </button>
          )}

          {/* Password Toggle */}
          {type === "password" && (
            <button
              onClick={() => setShowPassword(!showPassword)}
              className={`${showPassword ? "active" : ""}`}
              type="button"
              disabled={disabled}
            >
              <div className="animate-fadeIn">
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </div>
            </button>
          )}
        </div>

        {/* Password Strength Indicator */}
        {type === "password" && value && (
          <div className="password-strength">
            <div
              className={`
                  strength-bar
                  ${
                    value.length < 4
                      ? "strength-weak"
                      : value.length < 8
                        ? "strength-medium"
                        : "strength-strong"
                  }
                `}
            />
          </div>
        )}
      </div>

      {/* Error/Success Message */}
      {(error || success) && (
        <div className={`message ${error ? "error" : "success"}`}>
          {error || (success && "Validated Successfully!")}
        </div>
      )}
    </div>
  );
};
