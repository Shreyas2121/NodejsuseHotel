import express from "express";
import { createAddon, getAddons } from "../controllers/addonController.js";

const router = express.Router();

router.route("/addons").get(getAddons);

router.route("/addon").post(createAddon);

export default router;
