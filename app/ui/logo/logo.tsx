import { useFonts } from "../../FontContext";

export function Logo() {
  const { dawning } = useFonts();

  return (
    <>
      <span className={`${dawning.className} text-4xl pl-3 lg:pl-0 text-primary `}>
        Martina Mancuso
      </span>
    </>
  );
}
