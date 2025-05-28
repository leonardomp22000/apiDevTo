const User = require("../models/users.model");
const Post = require("../models/post.model");
const encrypt = require("../lib/encrypt");
const jwt = require("../lib/jwt");
const createError = require("http-errors");

async function login(email, password) {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw createError(401, "Invalid data");
  }
  const isPasswordValid = await encrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw createError(401, "Invalid data");
  }
  const token = jwt.sign({ id: user._id });
  return token;
}

async function verifyUser(postID, userLogged) {
  const post = await Post.findById(postID);
  if (!post) {
    throw createError(404, "Not found");
  }
  const { user } = post;
  if (user.toString() !== userLogged) {
    throw createError(401, "No permitido");
  }
  return true;
}

module.exports = {
  login,
  verifyUser,
};
