import DB from '@/config/db';
import PostModel from '@/models/post-model';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function updatePost(req, res) {
  if (req.method === 'POST') {
    try {
      // Database connection
      await DB();

      // Create new post
      const post = await PostModel.deleteOne({ slug: req.body.slug });

      // Return post data
      res.json({ post });
    } catch (error) {
      // Return error
      // console.log(error);
      res.json({ error });
    }
  } else {
    return res.json({ post: 'acces denied' });
  }
}
