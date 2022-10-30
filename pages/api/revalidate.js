export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // this should be the actual path not a rewritten path
      // e.g. for "/blog/[slug]" this should be "/blog/post-1"
      await res.revalidate(req.body.slug);
      return res.json({ revalidated: true });
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(400).send('Error revalidating');
    }
  } else {
    return res.json('acces denied');
  }
}
