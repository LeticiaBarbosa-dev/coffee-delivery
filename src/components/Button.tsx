import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="w-44 bg-button border border-transparent flex items-center pl-4 py-4 rounded-md gap-3 cursor-pointer hover:bg-hover focus:bg-purple_light focus:border focus:border-purple_base">
      {children}
    </button>
  );
}
