import MetaHead from '@/components/shared/meta-head';
import PostList from '@/components/post/post-list';
import Pagination from '@/components/shared/pagination';
import { getAllPost, getPageCount } from '@/controllers/post-controller';

function HomePageNum(props) {
  const { post, pageCount, page } = props;

  return (
    <>
      <MetaHead
        title={`Page ${page}`}
        description={process.env.NEXT_PUBLIC_SITE_DESC}
      />
      <PostList allPost={post} />
      <Pagination pageCount={pageCount} page={page} />
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const page = params.page_num;
  const post = await getAllPost(page);

  if (post.length === 0) {
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

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default HomePageNum;
