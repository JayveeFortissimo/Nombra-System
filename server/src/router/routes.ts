import express from "express";
const router = express.Router();

import CredentialsController from "@/controller/credentials.controller";
import CredentialsService from "@/service/credentials.service";
import CredentialsRepository from "@/repositories/credentials.repo";

const credentialsRepository = new CredentialsRepository();
const credentialsService = new CredentialsService(credentialsRepository);
const credentialsController = new CredentialsController(credentialsService);

router.post("/register", credentialsController.register);
router.post("/login", credentialsController.login);
router.post("/logout", credentialsController.logout);
router.post("/refresh-token", credentialsController.refreshToken);

export default router;
