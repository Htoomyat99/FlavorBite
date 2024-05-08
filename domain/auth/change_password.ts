import * as supabaseDataSource from "@/utils/supabase/supabaseDataSource";

export const updateUserInfo = async (newPassword: string) => {
  return await supabaseDataSource.changeUserInfo(newPassword);
};
