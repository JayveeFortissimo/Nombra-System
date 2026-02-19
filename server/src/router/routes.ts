import express from "express";
import { Response, Request } from "express";
import cloudinary from "../config/cloudinary";
import upload from "../middleware/multer";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  console.log("HelloSSSS");
  res.json({ message: "Hello@!" });
});

router.post(
  "/uploadSingleImage",
  upload.single("image"),
  async (req: Request, res: Response) => {
    try {
      if (!req.file) {
        res.status(400).json({ error: "Walang image na na-upload!" });
        return;
      }
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "vapeshop",
      });
    console.log(result)
      res.json({ message: "Success!", url: result.secure_url });
    } catch (_error) {
      console.log(_error)
    } 
  },
);

export default router;
