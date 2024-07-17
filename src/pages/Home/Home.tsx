import { Advantage } from "../../components/Advantage";
import { Header } from "../../components/Header";
import { Product } from "../../components/Product";
import imgCoffee from "../../../public/coffee.png";

export function Home() {
  return (
    <>
      <Header />
      <div className="bg-pattern bg-no-repeat bg-cover px-20">
        <div className="w-full h-[544px] flex justify-between items-center font-extrabold">
          <div className="flex flex-col">
            <h1 className="font-base text-5xl">
              Encontre o café perfeito <br />
              para qualquer hora do dia
            </h1>
            <p className="font-base_text font-normal text-xl mt-4">
              Com o Coffee Delivery você recebe seu café onde estiver, a<br />
              qualquer hora
            </p>
            <div className="flex gap-10 mt-[66px]">
              <div>
                <Advantage
                  bgColor="bg-yellow_dark"
                  icon="cart"
                  text="Compra simples e segura"
                />
                <Advantage
                  bgColor="bg-yellow_base"
                  icon="timer"
                  text="Entrega rápida e rastreada"
                />
              </div>
              <div>
                <Advantage
                  bgColor="bg-text_base"
                  icon="package"
                  text="Embalagem mantém o café intacto"
                />
                <Advantage
                  bgColor="bg-purple_base"
                  icon="coffee"
                  text="O café chega fresquinho até você"
                />
              </div>
            </div>
          </div>
          <img src={imgCoffee} alt="" />
        </div>
        <div>
          <h3 className="font-base text-[32px] font-extrabold mb-9">
            Nossos cafés
          </h3>
          <div className="flex flex-wrap">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </>
  );
}
