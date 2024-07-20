import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={`px-4 text-xs sm:text-base py-2 sm:px-8 text-light rounded-lg duration-300 shadow-sm w-max ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
