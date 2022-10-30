import DB from '@/config/db';
import PostModel from '@/models/post-model';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function createPost(req, res) {
  if (req.method === 'POST') {
    try {
      // Database connection
      await DB();

      // Create new post
      const post = await PostModel.create({
        slug: req.body.slug,
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        content: req.body.content,
      });

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
