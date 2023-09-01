"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const router = (0, express_1.Router)();
/*
 ** Get routes
 */
router.route("/").get(userControllers_1.getUsers);
router.route("/:id").get(userControllers_1.getUser);
/*
 ** Post routes
 */
router.route("/").post(userControllers_1.createUser);
router.route("/:id").post(userControllers_1.updateUser);
/*
 ** Delete routes
 */
router.route("/:id").delete(userControllers_1.deleteUser);
//exports
exports.default = router;
