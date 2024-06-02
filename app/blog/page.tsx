import { BlogCard } from "./blog-card";
import style from "./page.module.scss";

export default function Blog() {
  return (
    <div className="container">
      <p className="font-extrabold text-3xl mb-16">Blog</p>
      <div
        className={`flex flex-col gap-y-12 gap-x-12 lg:flex-row lg:flex-wrap ${style.container}`}
      >
        <BlogCard
          image="https://picsum.photos/400/600"
          date="24 Jun 2024"
          title="Lorem Ipsum"
        />
        <BlogCard
          image="https://picsum.photos/600/400"
          date="24 Jun 2024"
          title="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
        />
        <BlogCard
          image="https://picsum.photos/800/1000"
          date="24 Jun 2024"
          title="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
        />
        <BlogCard
          image="https://picsum.photos/1000/800"
          date="24 Jun 2024"
          title="Lorem Ipsum"
        />
        <BlogCard
          image="https://picsum.photos/1000/1000"
          date="24 Jun 2024"
          title="Lorem Ipsum"
        />
      </div>
    </div>
  );
}
