import { Router } from "express";
import { createTweet, getTweet, getTweets, updateTweet } from "../controllers/tweetRoutes";
const router = Router();
/*
 ** Get routes
 */
router.route("/").get(getTweets);
router.route("/:id").get(getTweet);
/*
 ** Post routes
 */
router.route("/").post(createTweet);
router.route("/:id").post(updateTweet);

//exports
export default router;
