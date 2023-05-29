import { GiBellPepper } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="bg-gray-600 p-2 w-screen box-border">
      <p className="my-2 flex flex-row">
        Autorzy (Miejmy nadzieję...): Andrzej, Jasiek, Adam i Papryczek{" "}
        <GiBellPepper className="ml-1" />
      </p>
    </footer>
  );
}
