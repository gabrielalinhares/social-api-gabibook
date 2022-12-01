const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// /api/user
router.route("/").get(getAllUser).post(createUser);

// /api/user/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// /api/comments/<userId>/<friendId>
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
