import MetaHead from '@/components/shared/meta-head';
import MyImage from '@/components/shared/my-image';
import Sidebar from '@/layout/sidebar';
import { getPostBySlug, getAllPost } from '@/config/data';
import { Parser } from 'html-to-react';

function Post(props) {
  const { post, allPost } = props;

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
                src={`/assets/img/${post.image}`}
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
        <Sidebar allPost={allPost} />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const postData = getPostBySlug(params.post_slug);

  if (!postData) {
    return {
      notFound: true,
    };
  }

  const allPost = getAllPost(1, 5);

  return {
    props: { post: postData, allPost: allPost },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default Post;
