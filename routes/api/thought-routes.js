const router = require("express").Router();
const {
  addThought,
  removeThought,
  updateThought,
  addReaction,
  removeReaction,
  getAllThoughts,
  getThoughtById,
} = require("../../controllers/thought-controller");

//Show all thoughts : api/thoughts
router.route("/").get(getAllThoughts);

// Post new Thought | Get thoughts by UserID > /api/thought/<userId>
router.route("/:userId").post(addThought);

// Get Thought | Delete Thought | Update Thought | Post Reaction  >  /api/thought/<userId>/<thoughtId>
router
  .route("/:userId/:thoughtId")
  .get(getThoughtById)
  .delete(removeThought)
  .put(updateThought);

// Add Reaction  > /api/thought/<thoughtId>/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// Delete Reaction > /api/thoughts/<thoughtId>/<reactiondId>
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
