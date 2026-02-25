import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();

declare global {
  namespace Express {
    interface Request {
      user?:  {
        user_id: number;
        role: boolean;
        email: string;
      };
    }
  }
}

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
 try{
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  const usersjwt = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET as string) as JwtPayload;

  if (!usersjwt) {
    return res.status(403).json({ message: 'Invalid token' });
  }
  
  req.user = {
   user_id: usersjwt.user_id,
   role: usersjwt.isadmin,
   email: usersjwt.email
  };

  next();
 }catch (error) {
  console.error('Error in authenticateToken middleware:', error);
  return res.status(403).json({ message: "Invalid token" });
 }
}




