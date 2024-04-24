import { libre } from "../../app/fonts";

interface SectionTitleProps {
  text: string;
}

export default function SectionTitle({ text }: SectionTitleProps) {
  return (
    <>
      <div className="text-2xl md:text-3xl font-bold text-center w-fit m-auto">
        {text}
        <div className="bg-primary-green w-3/4 m-auto h-1 mt-2 md:mt-4"></div>
      </div>
    </>
  );
}
