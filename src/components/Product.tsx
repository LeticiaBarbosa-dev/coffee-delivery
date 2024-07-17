import { ShoppingCart } from "@phosphor-icons/react";
import expressoTradicionalImage from "../../public/expresso-tradicional.png";
import { Tag } from "./Tag";
import { ButtonQuantity } from "./ButtonQuantity";
export function Product() {
  return (
    <div className="w-64 h-[310px] bg-card rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md flex flex-col items-center text">
      <div className="mt-[-20px]">
        <img src={expressoTradicionalImage} alt="" />
      </div>
      <Tag />
      <h3 className="font-base text-subtitle_base text-xl font-bold mt-4">
        Expresso Tradicional
      </h3>
      <p className="font-base_text text-center mt-2 text-sm font-normal">
        O tradicional café feito com água <br /> quente e grãos moídos
      </p>
      <div className="w-full flex justify-center items-center gap-[23px] mt-[33px]">
        <span>
          R$ <span className="text-2xl font-bold text-text_base font-base">9,90</span>
        </span>
        <div className="flex gap-2">
          <ButtonQuantity />
          <div className="bg-purple_dark text-card p-2 rounded-md flex items-center justify-center max-w-max hover:bg-purple_base cursor-pointer">
            <ShoppingCart size={22} weight="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}
