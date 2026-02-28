import type { Credentials } from "@/interfaces/credentials.interfaces";
import { generateAccessToken, generateRefreshToken, refreshDecoded } from "@/lib/jwt";
import { hashPassword, comparePassword } from "@/lib/passwordEncrypt";
class CredentialsService {
  constructor(private readonly repositories: any) {}

  async register(requested: Credentials) {
    const { email, username, password } = requested;
    const checkUser = await this.repositories.GetUserByEmail(email.trim());

    const hashedPassword = await hashPassword(password! as string);

    if (!checkUser) {
      await this.repositories.InsertUser(
        email.trim(),
        username,
        hashedPassword,
      );
      return { message: "User registered successfully!" };
    }

    if (checkUser.email.trim() === email.trim()) {
      return { message: "User already exists!" };
    }
  }

  async login(requested: Credentials) {
    const { email, password } = requested;
    const checkUser = await this.repositories.GetUserByEmail(email.trim());
    
    const compare = await comparePassword(password! as string, checkUser.user_password); 
  
    const { user_id, email: userEmail, isadmin } = checkUser;

    if (!compare) {
      return { message: "Password is incorrect!" };
    } else if (email.trim() !== checkUser.email) {
      return { message: "Invalid Account!" };
    }

    const accessToken = generateAccessToken({
      user_id,
      email: userEmail,
      isAdmin: isadmin,
    });
    const refreshToken = generateRefreshToken({
      user_id,
      email: userEmail,
      isAdmin: isadmin,
    });

    return { accessToken, refreshToken };
  }

  async refreshToken(token: string) {
    return refreshDecoded(token);
  }
}

export default CredentialsService;
