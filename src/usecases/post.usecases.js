const Post = require("../models/post.model");
const createError = require("http-errors");

async function create(postData) {
  return await Post.create(postData);
}

async function getAll(search) {
  if (!search) {
    const allPost = await Post.find().populate("user");
    return allPost;
  }
  const post = await Post.find({ title: { $regex: search, $options: "i" } });
  if (post.length == 0) {
    throw createError(404, "No post found");
  }
  return post;
}

async function deleted(idLoggedIn, postId) {
  const post = await Post.findById(postId);
  if (!post) {
    throw createError(404, "Post not found");
  }
  if (post.user.toString() !== idLoggedIn.toString()) {
    throw createError(403, "No eres el dueño");
  }
  const postDeleted = await Post.findByIdAndDelete(postId);
  return postDeleted;
}

async function update(id, postData) {
  const isUserOnBody = postData.user;
  if (isUserOnBody) {
    throw createError(400, "No se puede cambiar el usuario"); // PREGUNTA
  }
  const postUpdated = await Post.findByIdAndUpdate(id, postData, { new: true });
  return postUpdated;
}
module.exports = {
  create,
  getAll,
  deleted,
  update,
};
