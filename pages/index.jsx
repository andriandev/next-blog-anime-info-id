import MetaHead from '@/components/shared/meta-head';
import PostList from '@/components/post/post-list';
import Pagination from '@/components/shared/pagination';
import { getAllPost, getPageCount } from '@/controllers/post-controller';

function HomePage(props) {
  const { post, pageCount, page } = props;

  return (
    <>
      <MetaHead
        title={process.env.NEXT_PUBLIC_SITE_TITLE}
        description={process.env.NEXT_PUBLIC_SITE_DESC}
      />
      <PostList allPost={post} />
      <Pagination pageCount={pageCount} page={page} />
    </>
  );
}

export async function getStaticProps() {
  const page = 1;
  const post = await getAllPost(page);

  if (post.length == 0) {
    return {
      notFound: true,
    };
  }

  const pageCount = await getPageCount();

  return {
    props: {
      post: post,
      pageCount: pageCount,
      page: page,
    },
    revalidate: +process.env.REVALIDATE_TIME,
  };
}

export default HomePage;
