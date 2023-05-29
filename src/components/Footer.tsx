import { GiBellPepper } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="bg-gray-400 p-2 w-screen box-border">
      <p className="my-2 flex flex-row">
        Autorzy (Miejmy nadzieję...): Andrzej, Jasiek, Adam, Milena i Papryczek{" "}
        <GiBellPepper className="ml-1" />
      </p>
    </footer>
  );
}
