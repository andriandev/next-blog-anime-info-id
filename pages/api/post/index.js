import DB from '@/config/db';
import PostModel from '@/models/post-model';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function AllPost(req, res) {
  try {
    // Database connection
    await DB();

    // Find post
    const post = await PostModel.find().sort({ _id: 'desc' });

    // Return post data
    res.json({ post });
  } catch (error) {
    // Return error
    // console.log(error);
    res.json({ error });
  }
}
