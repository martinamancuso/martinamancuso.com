import { PageTitle } from "../ui/page-title";
import { BlogCard } from "./blog-card";
import style from "./page.module.scss";

export default function Blog() {
  return (
    <div className="container">
      <PageTitle>Blog</PageTitle>
      <div
        className={`flex flex-col gap-12 lg:flex-row lg:flex-wrap ${style.container}`}
      >
        <BlogCard
          path="/post"
          image="https://picsum.photos/400/600"
          date="24 Jun 2024"
          title="Lorem Ipsum"
        />
        <BlogCard
          path="/post"
          image="https://picsum.photos/600/400"
          date="24 Jun 2024"
          title="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
        />
        <BlogCard
          path="/post"
          image="https://picsum.photos/800/1000"
          date="24 Jun 2024"
          title="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
        />
        <BlogCard
          path="/post"
          image="https://picsum.photos/1000/800"
          date="24 Jun 2024"
          title="Lorem Ipsum"
        />
        <BlogCard
          path="/post"
          image="https://picsum.photos/1000/1000"
          date="24 Jun 2024"
          title="Lorem Ipsum"
        />
      </div>
    </div>
  );
}
