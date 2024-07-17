import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

interface AdvantageProps {
  bgColor: string;
  icon: string;
  text: string;
}

export function Advantage({bgColor, icon, text}: AdvantageProps) {
  return (
    <div className="flex gap-3 items-center mb-5">
      <div className={`${bgColor} text-default p-2 rounded-full`}>
        {icon === "cart" ? <ShoppingCart weight="fill" /> : icon === "timer" ? <Timer weight="fill" /> : icon === "package" ? <Package weight="fill" /> : icon === "coffee" ? <Coffee weight="fill" /> : null}
      </div>
      <span className="font-base_text font-normal">{text}</span>
    </div>
  );
}
