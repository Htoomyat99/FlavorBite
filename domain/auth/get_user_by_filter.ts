import * as supabaseDataSource from "../../utils/supabase/supabaseDataSource";

export const getUserByFilter = async ({ colValue }: { colValue: string }) => {
  return supabaseDataSource.getAllDataByFilter("account", "id", colValue);
};
