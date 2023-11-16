import express from "express";

const router = express.Router();
import {
  getUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

//get request can be checked through chrome as well

router.get("/", getUsers);

// can be checked through softwares like Postman

router.post("/post", addUser);

// will get any data from params if (:) used  / id is used for params identifier

router.get("/:id", getUser);

// delete the use with particular id

router.delete("/:id", deleteUser);

//Update
router.patch("/:id", updateUser);

export default router;
