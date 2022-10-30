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

      let reqUpdate = {};
      if (req.body.slug) {
        reqUpdate.slug = req.body.slug;
      }
      if (req.body.title) {
        reqUpdate.title = req.body.title;
      }
      if (req.body.image) {
        reqUpdate.image = req.body.image;
      }
      if (req.body.description) {
        reqUpdate.description = req.body.description;
      }
      if (req.body.content) {
        reqUpdate.content = req.body.content;
      }

      // Create new post
      const post = await PostModel.update({ slug: req.body.url }, reqUpdate);

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
