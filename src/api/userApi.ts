import { IUser } from "../types/userType";
import axiosInstance from "./axiosInstance";

const userApi = {
  getAllUsers: (): Promise<IUser[]> => {
    return axiosInstance.get("users");
  },
  getASingleUser: (userId: number): Promise<IUser> => {
    return axiosInstance.get(`users/${userId}`);
  },
};

export default userApi;
