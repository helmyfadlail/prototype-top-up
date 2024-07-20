import { ChangeEvent } from "react";

interface InputProps {
  placeholder: string;
  name: string;
  type: "text" | "number" | "password" | "email" | "search";
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, name, type, handleChange }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      autoComplete="off"
      onFocus={(e) =>
        e.target.addEventListener(
          "wheel",
          function (e) {
            e.preventDefault();
          },
          { passive: false }
        )
      }
      min={type === "number" ? "0" : undefined}
      className="w-full px-4 py-2 bg-gray-800 border border-gray-500 outline-none focus:outline-2 focus:border-none focus:outline-primary placeholder:text-gray-500 rounded-xl"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
