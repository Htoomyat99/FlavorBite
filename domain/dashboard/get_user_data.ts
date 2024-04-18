import * as supabaseDataSource from "@/utils/supabase/supabaseDataSource";

export const getUserData = async (userId: string) => {
  return await supabaseDataSource.getAllDataByFilter("account", "id", userId);
};
