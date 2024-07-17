import { Minus, Plus } from "@phosphor-icons/react";

export function ButtonQuantity() {
  return (
    <div className="bg-button flex items-center justify-between gap-1 p-2 rounded-md text-purple_base">
      <Minus className="cursor-pointer hover:text-purple_dark" weight="bold" />
      <span>1</span>
      <Plus className="cursor-pointer hover:text-purple_dark" weight="bold" />
    </div>
  );
}
