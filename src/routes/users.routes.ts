import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controller";
import { catchAsync } from "../utils/catchAsync";

const router = Router();

router
  .route("/users")
  .get(catchAsync(getAllUsers))
  .post(catchAsync(createUser));
router
  .route("/users/:id")
  .get(catchAsync(getUserById))
  .put(catchAsync(updateUser))
  .delete(catchAsync(deleteUser));

export default router;
