import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET!;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET!;

const generateAccessToken = (payload: object) => {
  return jwt.sign(payload, accessTokenSecret, { expiresIn: "15m" });
};

const generateRefreshToken = (payload: object) => {
  return jwt.sign(payload, refreshTokenSecret, { expiresIn: "7d" });
};


const refreshDecoded = (token:string) => {
    const userDecoded = jwt.verify(token, refreshTokenSecret) as jwt.JwtPayload;
  
    if(!userDecoded){
      return {message: "Invalid Refresh Token!"}
    }
    
    const newAccessToken = generateAccessToken({
      user_id: userDecoded.user_id,
      email: userDecoded.email,
      isAdmin: userDecoded.isAdmin,
    });
    
    return { accesToken: newAccessToken };
}

export { generateAccessToken, generateRefreshToken, refreshDecoded };
