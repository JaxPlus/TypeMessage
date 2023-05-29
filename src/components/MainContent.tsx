import { BsStars } from "react-icons/bs";

export default function MainContent() {
  return (
    <div className="mx-auto w-4/5 m-5 p-2">
      <div className="mb-5">
        <h2>Innowacyjne podejście... ja na pewno</h2>
        <p>
          To tylko głupiutki projekt, za którego trzeba przelać krew nasz
          wszystkich.
        </p>
      </div>
      <div className="mb-5">
        <p>
          Także ten ta bjutiful (przynajmniej na razie) strona ma służyć do
          pisania ze sobą, czyli innymi słowy zżynka z{" "}
          <span>
            messengera
            <BsStars size="20" />
          </span>{" "}
          ale wszyscy wiemy, że messenger to dziadostwo, którego trzeba się
          pozbyć.
        </p>
      </div>
    </div>
  );
}
