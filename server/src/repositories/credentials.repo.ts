import { databaseConnection } from "@/config/database";

class CredentialsRepository {
  constructor() {}

  async InsertUser(email: string, username: string, password: string) {
    const result = await databaseConnection.query(
      "INSERT INTO users (user_name,email,user_password) VALUES ($1,$2,$3)",
      [username, email, password],
    );

    return result;
  }

  async GetUserByEmail(email: string) {
    const result = await databaseConnection.query(
      "SELECT user_id, email, user_password, isadmin FROM users WHERE email = $1",
      [email],
    );
    return result.rows[0];
  }
}
export default CredentialsRepository;
