import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logo from "../../public/Logo.svg";
export function Header() {
  return (
    <header className="flex justify-between py-8 px-20">
      <img src={logo} alt="" />
      <div className="flex items-center gap-3">
        <div className="bg-purple_light flex items-center gap-2 p-2 rounded-md text-purple_dark">
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <div className="bg-yellow_light flex justify-center items-center text-yellow_dark p-2 rounded-md">
          <ShoppingCart size={22} weight="fill" />
        </div>
      </div>
    </header>
  );
}
