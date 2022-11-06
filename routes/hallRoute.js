import express from "express";
import { getHalls } from "../controllers/hallController.js";

const router = express.Router();

router.route("/halls").get(getHalls);

export default router;
