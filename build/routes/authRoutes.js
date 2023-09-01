"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authControllers_1 = require("../controllers/authControllers");
const router = (0, express_1.Router)();
/*
 ** Get routes
 */
router.route("/").get();
/*
 ** Post routes
 */
router.route("/login").post(authControllers_1.loginUser);
router.route("/authenticate").post(authControllers_1.authenticateUser);
//exports
exports.default = router;
