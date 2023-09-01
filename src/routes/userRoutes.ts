import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userControllers";
const router = Router();
/*
 ** Get routes
 */
router.route("/").get(getUsers);
router.route("/:id").get(getUser);
/*
 ** Post routes
 */
router.route("/").post(createUser);
router.route("/:id").post(updateUser);
/*
 ** Delete routes
 */
router.route("/:id").delete(deleteUser);

//exports
export default router;
