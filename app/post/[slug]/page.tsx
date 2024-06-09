import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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

export default async function Post({
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
  const assets = data.includes.Asset;
  const dateObject = new Date(post.sys.createdAt);

  return (
    <div className="page-container">
      <div className="container">
        <img
          src={assets[0].fields.file.url}
          alt="Lorem Ipsum"
          className="w-full h-auto object-cover pb-9"
        />
        <div>
          <div className="pb-5 text-sm text-greyText">{dateObject.toLocaleDateString()}</div>
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
