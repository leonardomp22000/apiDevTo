const express = require("express");
const postUsecases = require("../usecases/post.usecases");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");

router.post("/", auth, async (request, response) => {
  try {
    const postData = {
      ...request.body,
      user: request.user._id,
    };
    const postCreated = await postUsecases.create(postData);
    response.json({
      success: true,
      data: {
        postCreated,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.get("/", async (request, response) => {
  try {
    console.log(request.query.title);
    const posts = await postUsecases.getAll(request.query.title);
    response.json({
      success: true,
      data: {
        posts,
      },
    });
  } catch (error) {
    response.status(error.status || 500),
      response.json({
        sucess: false,
        error: error.message,
      });
  }
});

router.delete("/:id", auth, async (request, response) => {
  try {
    const idLoggedIn = request.user._id;
    const { id } = request.params;
    const postDeleted = await postUsecases.deleted(idLoggedIn, id);
    response.json({
      success: true,
      data: {
        postDeleted: postDeleted,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.patch("/:id", auth, async (request, response) => {
  try {
    const { id } = request.params;
    const postUpdated = await postUsecases.update(id, request.body);
    response.json({
      success: true,
      data: {
        postUpdated: postUpdated,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
