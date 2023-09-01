"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tweetRoutes_1 = require("../controllers/tweetRoutes");
const router = (0, express_1.Router)();
/*
 ** Get routes
 */
router.route("/").get(tweetRoutes_1.getTweets);
router.route("/:id").get(tweetRoutes_1.getTweet);
/*
 ** Post routes
 */
router.route("/").post(tweetRoutes_1.createTweet);
router.route("/:id").post(tweetRoutes_1.updateTweet);
//exports
exports.default = router;
