import { FormattedDate } from "@/app/ui/formatted-date/formatted-date";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Metadata } from "next";

interface Asset {
  sys: {
    id: string;
  };
  fields: {
    title: string | undefined;
    file: {
      url: string;
    };
  };
}

export async function generateStaticParams() {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?content_type=blogPost`,
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
}) {
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
  const assets: Asset[] = data.includes.Asset;
  const publishedTime = new Date(post.fields.date).toISOString();

  const getImageUrl = (imageId: string): string => {
    const image = assets.find((asset) => asset.sys.id === imageId);
    return image ? image.fields.file.url : "";
  };

  return {
    title: `${post.fields.title} - Martina Mancuso`,
    openGraph: {
      type: "article",
      url: `https://martinamancuso.com/blog/${params.slug}`,
      title: post.fields.title,
      siteName: "martinamancuso.com",
      images: {
        url: `https:${getImageUrl(post.fields.image.sys.id)}`,
      },
      publishedTime,
      authors: "Martina Mancuso",
    },
  };
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
  const assets: Asset[] = data.includes.Asset;

  const getImageUrl = (imageId: string): string => {
    const image = assets.find((asset) => asset.sys.id === imageId);
    return image ? image.fields.file.url : "";
  };

  return (
    <div className="page-container">
      <div className="container">
        <img
          src={getImageUrl(post.fields.image.sys.id)}
          alt={assets[0].fields.title}
          className="w-full h-auto pb-9"
        />
        <div>
          <div className="pb-5">
            <FormattedDate date={post.fields.date} />
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
