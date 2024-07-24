import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends ComponentProps<"input"> {}
export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={twMerge(
        "bg-input p-3 rounded border border-button outline-none focus:font-base_text focus:text-text_base focus:border-yellow_dark placeholder:font-base_text placeholder:text-label",
        props.className
      )}
      type="text"
    />
  );
}
