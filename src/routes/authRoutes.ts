import { Router } from "express";
import { authenticateUser, loginUser } from "../controllers/authControllers";
const router = Router();

/*
 ** Get routes
 */
router.route("/").get();
/*
 ** Post routes
 */
router.route("/login").post(loginUser);
router.route("/authenticate").post(authenticateUser);

//exports
export default router;
