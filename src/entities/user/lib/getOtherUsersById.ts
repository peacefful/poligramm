import { storage } from "@/shared/lib/utils";
import { type TUser } from "@/shared/types";

export const getOtherUsersById = (users: TUser[]): TUser[] | null => {
  const userId = useCookie("userId");
  return users.filter((user) => user.id !== userId.value);
};
