import { Header } from "../../components/Header";
import imgDelivery from "../../../public/images/delivery.svg";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

export function Success() {
  return (
    <>
      <Header />
      <div className="py-8 px-20">
        <div className="gap-1">
          <h1 className="font-base text-2xl font-extrabold text-yellow_dark">
            Uhu! Pedido confirmado
          </h1>
          <p className="font-base_text text-sm text-subtitle_base">
            Agora é só aguardar que logo o café chegará até você
          </p>
        </div>
        <div className="flex justify-between mt-7">
          <div className="border border-purple_base rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md p-10 flex flex-col gap-8">
            <div className="flex gap-3 items-center">
              <div className="bg-purple_base p-2 rounded-full">
                <MapPin size={16} weight="fill" color="#FAFAFA" />
              </div>
              <div>
                <p className="text-subtitle_base font-base_text">
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                  <br /> Farrapos - Porto Alegre, RS
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="bg-yellow_base p-2 rounded-full">
                <Timer size={16} weight="fill" color="#FAFAFA" />
              </div>
              <div>
                <p className="text-subtitle_base font-base_text">
                  Previsão de entrega <br />
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="bg-yellow_dark p-2 rounded-full">
                <CurrencyDollar size={16} weight="bold" color="#FAFAFA" />
              </div>
              <div>
                <p className="text-subtitle_base font-base_text">
                  Pagamento na entrega <br /><strong>Cartão de Crédito</strong>
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={imgDelivery} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
