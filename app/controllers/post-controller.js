import DB from '@/config/db';
import PostModel from '@/models/post-model';

DB();
const limitPostPerPage = 6;

export async function getAllPost(page = 1, limit = limitPostPerPage) {
  // Find post
  const skip = (page - 1) * limit || 0;
  let dataPost = await PostModel.find()
    .select('slug title image')
    .sort({ _id: 'desc' })
    .skip(skip)
    .limit(limit);
  let allPost = [];
  dataPost.map((post) =>
    allPost.push({
      id: post._id.toString(),
      slug: post.slug,
      title: post.title,
      image: post.image,
    })
  );

  // Return post data
  return allPost;
}

export async function getPostBySlug(slug, limit = limitPostPerPage) {
  // Find post with slug
  let post = await PostModel.find({ slug: slug });
  let detailPost = [];
  post.map((post) =>
    detailPost.push({
      id: post._id.toString(),
      slug: post.slug,
      title: post.title,
      image: post.image,
      description: post.description,
      content: post.content,
    })
  );

  let recentPost = await PostModel.find()
    .select('title slug')
    .sort({ _id: 'desc' })
    .limit(limit);
  let allRecentPost = [];
  recentPost.map((post) =>
    allRecentPost.push({
      id: post._id.toString(),
      slug: post.slug,
      title: post.title,
    })
  );

  // Return post data
  return { post: detailPost, recentPost: allRecentPost };
}

export async function getPageCount(limit = limitPostPerPage) {
  const totalPost = await PostModel.count();
  const pageCount = totalPost / limit;
  return Math.ceil(pageCount);
}
