import express from "express";
import { sendMail } from "../utils/mailer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await sendMail(req.body);
    res.json({ success: true, msg: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Failed to send email" });
  }
});

export default router;
