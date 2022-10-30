import MetaHead from '@/components/shared/meta-head';
import MyImage from '@/components/shared/my-image';
import Sidebar from '@/layout/sidebar';
import { getPostBySlug } from '@/controllers/post-controller';
import { Parser } from 'html-to-react';

function Post(props) {
  const { post, recentPost } = props;

  const imgUrl = post.image.includes('https://')
    ? post.image
    : `/assets/img/${post.image}`;

  return (
    <>
      <MetaHead
        title={post.title}
        description={post.description}
        canonical={post.slug}
      />
      <div className="row">
        <div className="col-12 col-md-8 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <MyImage
                width={850}
                height={480}
                src={imgUrl}
                alt={post.title}
                className="rounded"
              />
              <h1 className="h4 my-2">{post.title}</h1>
              <div className="mt-2 content-post">
                {Parser().parse(post.content)}
              </div>
            </div>
          </div>
        </div>
        <Sidebar recentPost={recentPost} />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const postData = await getPostBySlug(params.post_slug);

  if (postData.post.length == 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: postData.post[0],
      recentPost: postData.recentPost,
    },
    revalidate: +process.env.REVALIDATE_TIME,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default Post;
