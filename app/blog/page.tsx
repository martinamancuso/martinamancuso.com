import Head from 'next/head';
import { PageTitle } from "../ui/page-title/page-title";
import { BlogCard } from "./blog-card";
import style from "./page.module.scss";

export default async function Blog() {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries`,
    {
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    }
  );

  const data = await response.json();
  const posts = data.items;
  const assets = data.includes.Asset;

  return (
    <div className="page-container">
      <Head>
        <title>Martina Mancuso's Blog - Insights on Coding, Reading, Psychology and Personal Growth</title>
        <meta name="description" content="Discover Martina Mancuso's blog: articles on coding, psychology and personal growth. Beyond the CV and human imperfection, towards the best version of myself." />
      </Head>
      <div className="container">
        <PageTitle>Blog</PageTitle>
        <div
          className={`flex flex-col gap-12 lg:flex-row lg:flex-wrap ${style.container}`}
        >
          {posts.map((post: any, index: number) => (
            <BlogCard
              key={index}
              path={`/blog/${post.fields.slug}`}
              image={assets[0].fields.file.url}
              date={post.sys.createdAt}
              title={post.fields.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
