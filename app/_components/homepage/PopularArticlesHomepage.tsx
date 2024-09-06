import CarouselHomepage from "./CarouselHomepage";

export default function PopularArticlesHomepage() {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="flex flex-col items-center my-14 font-medium text-3xl text-black">
        {" "}
        Popularne artykuły{" "}
      </h2>{" "}
      <p className="pb-10 px-6 text-blackSecond tracking-wide leading-tight font-light text-xl md:px-10 text-center max-w-[1100px] mx-auto">
        {" "}
        Odkryj najciekawsze treści, które inspirują i poszerzają horyzonty.{" "}
        <span className="text-mainGreen"> Znajdziesz tutaj artykuły</span>,
        które poruszają ważne tematy i odpowiadają na pytania współczesności. Od
        innowacji technologicznych po styl życia – pozwól sobie na odkrywanie
        nowej wiedzy.{" "}
      </p>{" "}
      <CarouselHomepage />{" "}
      <p className="py-10 px-6 text-blackSecond tracking-wide leading-tight font-light text-xl md:px-10 text-center max-w-[1100px] mx-auto">
        {" "}
        Każdy artykuł to nowa dawka inspiracji, a{" "}
        <span className="text-mainGreen">nasi autorzy</span> są pasjonatami
        swoich dziedzin. Znajdź coś dla siebie, rozwijaj swoje zainteresowania i
        dziel się tym, co dla Ciebie ważne.{" "}
      </p>
    </div>
  );
}
