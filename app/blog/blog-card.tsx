import Image from "next/image";

export function BlogCard({ date, title }: { date: string; title: string}) {
  return (
    <div className="bg-white shadow grow shrink-0 basis-2/5">
      {/* <div>
        <Image
          src="https://cdn.britannica.com/36/234736-050-4AC5B6D5/Scottish-fold-cat.jpg"
          alt="scottish cat"
          width={500}
          height={300}
        />
      </div> */}
      <div className="p-7">
        <div className="pb-2 text-sm text-greyText">{date}</div>
        <div className="pt-2 border-t border-greyBorders text-lg font-semibold">{title}</div>
      </div>
    </div>
  );
}
