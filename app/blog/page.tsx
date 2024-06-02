import { BlogCard } from "./blog-card";
import style from "./page.module.scss";

export default function Blog() {
  return (
    <div className="container">
      <p className="font-extrabold text-3xl mb-16">Blog</p>
      <div className={`flex flex-col gap-y-12 gap-x-12 lg:flex-row lg:flex-wrap ${style.container}`}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
