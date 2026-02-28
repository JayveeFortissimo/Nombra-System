import { Request, Response } from "express";
import type { Credentials } from "@/interfaces/credentials.interfaces";
class CredentialsController {
  constructor(private readonly service: any) {}

  register = async (req: Request<Credentials>, res: Response) => {
    try {
      const requested: Credentials = req.body;

      const result = await this.service.register(requested);

      if (result.message === "User already exists!") {
        return res.status(409).json({ message: "User already exists!" });
      }

      res.status(201).json({ message: result.message });
    } catch (_error) {
      console.log("Error in register controller", _error);
    }
  };

  login = async (req: Request<Credentials>, res: Response) => {
    try {
      const loginRequest: Credentials = req.body;

      const loginResult = await this.service.login(loginRequest);

      if (loginResult.message === "Password is incorrect!" || loginResult.message === "Invalid Account!") {
        return res.status(401).json({ message: loginResult.message });
      } else {
        const { accessToken, refreshToken } = loginResult;
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true, // Set to true in production
          // secure: true,
          // sameSite: "strict",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.status(200).json({ message: "Login successful!", accessToken });
      }
    } catch (_error) {
      console.log("Error in login controller", _error);
    }
  };

  logout = async (req: Request, res: Response) => {
    try {
      res.clearCookie("refreshToken");
      res.status(200).json({ message: "Logout successful!" });
    } catch (_error) {
      console.log("Error in logout controller", _error);
    }
  };

  refreshToken = async (req: Request, res: Response) => {
    try {
      const refreshToken = req.cookies?.refreshToken;

      if (!refreshToken) {
        return res.status(401).json({ message: "No refresh token provided!" });
      }

      const resultToken = await this.service.refreshToken(refreshToken);

      res.status(200).json(resultToken);
    } catch (_error) {
      console.log("Error in refresh token controller", _error);
    }
  };
}

export default CredentialsController;
