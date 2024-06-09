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
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus recusandae amet tenetur enim modi officiis ex. Eligendi
              assumenda doloribus voluptatibus eius doloremque? Possimus,
              consequuntur. Ab eaque quasi repellendus quos dolorum! Explicabo
              nesciunt ipsa debitis, ab aspernatur, consectetur cumque nobis
              repudiandae ipsam officia architecto quis, labore fuga vero nisi
              cupiditate impedit dolores aperiam. Dolorem repudiandae
              praesentium impedit officiis, voluptatibus sit at! Maxime, id
              soluta? Excepturi blanditiis illo est, consequuntur nulla,
              provident accusamus doloremque sapiente, magnam voluptates fuga
              porro modi dignissimos dolorem accusantium similique architecto
              assumenda unde ipsam aspernatur eligendi ab deserunt? Similique
              quidem pariatur est placeat accusamus excepturi doloribus eius
              amet, mollitia impedit soluta iste exercitationem repudiandae
              dolore recusandae corporis molestias ut quod vitae! Dicta laborum
              alias optio dignissimos cupiditate dolore.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus recusandae amet tenetur enim modi officiis ex. Eligendi
              assumenda doloribus voluptatibus eius doloremque? Possimus,
              consequuntur. Ab eaque quasi repellendus quos dolorum! Explicabo
              nesciunt ipsa debitis, ab aspernatur, consectetur cumque nobis
              repudiandae ipsam officia architecto quis, labore fuga vero nisi
              cupiditate impedit dolores aperiam. Dolorem repudiandae
              praesentium impedit officiis, voluptatibus sit at! Maxime, id
              soluta? Excepturi blanditiis illo est, consequuntur nulla,
              provident accusamus doloremque sapiente, magnam voluptates fuga
              porro modi dignissimos dolorem accusantium similique architecto
              assumenda unde ipsam aspernatur eligendi ab deserunt? Similique
              quidem pariatur est placeat accusamus excepturi doloribus eius
              amet, mollitia impedit soluta iste exercitationem repudiandae
              dolore recusandae corporis molestias ut quod vitae! Dicta laborum
              alias optio dignissimos cupiditate dolore.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus recusandae amet tenetur enim modi officiis ex. Eligendi
              assumenda doloribus voluptatibus eius doloremque? Possimus,
              consequuntur. Ab eaque quasi repellendus quos dolorum! Explicabo
              nesciunt ipsa debitis, ab aspernatur, consectetur cumque nobis
              repudiandae ipsam officia architecto quis, labore fuga vero nisi
              cupiditate impedit dolores aperiam. Dolorem repudiandae
              praesentium impedit officiis, voluptatibus sit at! Maxime, id
              soluta? Excepturi blanditiis illo est, consequuntur nulla,
              provident accusamus doloremque sapiente, magnam voluptates fuga
              porro modi dignissimos dolorem accusantium similique architecto
              assumenda unde ipsam aspernatur eligendi ab deserunt? Similique
              quidem pariatur est placeat accusamus excepturi doloribus eius
              amet, mollitia impedit soluta iste exercitationem repudiandae
              dolore recusandae corporis molestias ut quod vitae! Dicta laborum
              alias optio dignissimos cupiditate dolore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
