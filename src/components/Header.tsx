import Button from "./Button";
import { BiMessageAltEdit } from "react-icons/bi";

export default function Header() {
  return (
    <header className="bg-red-600 p-2 w-screen box-border">
      <h1 className="flex flex-row my-2 font-bold items-center">
        <BiMessageAltEdit size="23" className="mr-2" /> TypeMessage
      </h1>
      <p className="my-2">Nowy lepszy Messenger hehehehehehe</p>

      <Button className="absolute top-0 right-0">Zarejestruj się</Button>
    </header>
  );
}
