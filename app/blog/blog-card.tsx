import Link from "next/link";
import { FormattedDate } from "../ui/formatted-date/formatted-date";

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
        <img src={image} alt={title} className="w-full h-auto" />
        <div className="p-7">
          <div className="pb-2"><FormattedDate date={date} /></div>
          <div className="pt-2 border-t border-greyBorders text-lg font-semibold">
            {title}
          </div>
        </div>
      </Link>
  );
}
