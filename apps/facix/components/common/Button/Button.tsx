import type { FC, ReactNode } from "react";

export interface ButtonProps {
  bg?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, bg }) => {
  return <button style={{ backgroundColor: bg }}>{children}</button>;
};

export default Button;
