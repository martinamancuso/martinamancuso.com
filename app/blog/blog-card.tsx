import Link from "next/link";

export function BlogCard({
  path,
  image,
  date,
  title,
}: {
  path: string;
  image: string;
  date: string;
  title: string;
}) {
  return (
      <Link href={path} className="bg-white shadow grow shrink-0 basis-2/5">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="p-7">
          <div className="pb-2 text-sm text-greyText">{date}</div>
          <div className="pt-2 border-t border-greyBorders text-lg font-semibold">
            {title}
          </div>
        </div>
      </Link>
  );
}
