import express from "express";
import { getRooms } from "../controllers/roomController.js";

const router = express.Router();

router.route("/rooms").get(getRooms);

export default router;
