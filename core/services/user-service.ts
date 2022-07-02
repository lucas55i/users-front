import { AxiosInstance } from "axios";
import { buildHttpClient } from "../common/http-client";
import { User } from "../models/user";

class UserService {
  private httpClient: AxiosInstance;
  constructor() {
    const apiUrl = process.env.usersApi as string;
    this.httpClient = buildHttpClient(apiUrl);
  }
  async getAll(): Promise<User[]> {
    return await this.httpClient.get("/users");
  }
  async addUser(user: User): Promise<User> {
    return await this.httpClient.post(`/users`, user);
  }

  async deleteUser(_id: string): Promise<string> {
    return await this.httpClient.delete("/users/" + _id);
  }
}

const userService = new UserService();
export { userService };
