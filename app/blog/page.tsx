import { BlogCard } from "./blog-card";

export default function Blog() {
  return (
    <div className="container">
      <p className="font-extrabold text-3xl mb-16">Blog</p>
      <div className="flex flex-col gap-12 lg:flex-row lg:flex-wrap">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
