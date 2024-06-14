import { FormattedDate } from "@/app/ui/formatted-date/formatted-date";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Metadata } from "next";

export async function generateStaticParams() {
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
  return posts.map((post: any) => ({
    slug: post.fields.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?content_type=blogPost&fields.slug=${params.slug}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  const post = data.items[0];

  return {
    title: `${post.fields.title} - Martina Mancuso`,
  } as Metadata;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?content_type=blogPost&fields.slug=${params.slug}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  const post = data.items[0];
  const assets = data.includes.Asset;

  return (
    <div className="page-container">
      <div className="container">
        <img
          src={assets[0].fields.file.url}
          alt="Lorem Ipsum"
          className="w-full h-auto object-cover pb-9"
        />
        <div>
          <div className="pb-5">
            <FormattedDate date={post.sys.createdAt} />
          </div>
          <div className="py-5 border-t border-greyBorders text-2xl font-semibold">
            {post.fields.title}
          </div>
          <div className="text-sm text-greyText tracking-wide leading-loose text-justify flex flex-col gap-5">
            {documentToReactComponents(post.fields.content)}
          </div>
        </div>
      </div>
    </div>
  );
}
