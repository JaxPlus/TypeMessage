type ButtonProps = {
  children: JSX.Element | string;
  type?: "primary" | "secondary"; // Trzeba będzie zapewne dodać więcej
  className: string;
};

export default function Button({
  children,
  type = "primary",
  className = "",
}: ButtonProps) {
  return (
    <button
      className={`${
        type === "primary" ? "bg-blue-500" : "bg-red-900"
      } ${className} ${
        type === "primary" ? "hover:bg-blue-600" : "hover:bg-red-800"
      } rounded p-2 m-3`}
    >
      {children}
    </button>
  );
}
