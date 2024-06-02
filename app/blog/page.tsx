import { BlogCard } from "./blog-card";
import style from "./page.module.scss";

export default function Blog() {
  return (
    <div className="container">
      <p className="font-extrabold text-3xl mb-16">Blog</p>
      <div className={`flex flex-col gap-y-12 gap-x-12 lg:flex-row lg:flex-wrap ${style.container}`}>
        <BlogCard date="24 Jun 2024" title="Lorem Ipsum" />
        <BlogCard date="24 Jun 2024" title="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum" />
        <BlogCard date="24 Jun 2024" title="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum" />
        <BlogCard date="24 Jun 2024" title="Lorem Ipsum" />
        <BlogCard date="24 Jun 2024" title="Lorem Ipsum" />
      </div>
    </div>
  );
}
