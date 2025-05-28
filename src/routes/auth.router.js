const express = require("express");
const authUsecase = require("../usecases/auth.usecase");

const router = express.Router();

router.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    const token = await authUsecase.login(email, password);
    response.json({
      success: true,
      data: { token },
    });
  } catch (error) {
    response.status(error.status || 500),
      response.json({
        success: false,
        error: error.message,
      });
  }
});

router.post("/verifyUser", async (request, response) => {
  try {
    const { postID, userLogged } = request.body;
    await authUsecase.verifyUser(postID, userLogged);
    response.json({ success: true });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
