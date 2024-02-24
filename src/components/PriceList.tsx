export const PriceList = () => (
  <section className="container pt-10 flex items-center flex-col w-full gap-y-2">
    <h2 className="text-3xl self-start font-bold">Cennik</h2>

    <div className="flex flex-col gap-y-8">
      <h3 className="text-xl text-black font-bold uppercase">Keratynowe prostowanie</h3>

      <ul className="flex flex-col gap-y-5 uppercase">
        <li className="w-full flex justify-between">
          <p className="text-base text-black font-bold">Włosy krótkie</p>
          <span className="text-sm font-light text-black">250</span>
        </li>
        <li className="w-full flex justify-between">
          <p className="text-base text-black font-bold">Włosy średnie</p>
          <span className="text-sm font-light text-black">300</span>
        </li>
        <li className="w-full flex justify-between">
          <p className="text-base text-black font-bold">Włosy długie</p>
          <span className="text-sm font-light text-black">350</span>
        </li>
      </ul>

      <p className="text-black text-sm font-light">Gęste włosy + 40 zł</p>
    </div>
  </section>
);
