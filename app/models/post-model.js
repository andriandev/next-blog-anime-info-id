import { Schema, model, models } from 'mongoose';

const postSchema = new Schema({
  slug: { type: String, require: true, unique: true },
  title: { type: String, require: true },
  image: { type: String, require: true },
  description: { type: String, require: true },
  content: { type: String, require: true },
});

const PostModel = models.Post || model('Post', postSchema);

export default PostModel;
