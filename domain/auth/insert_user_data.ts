import * as supabaseDataSource from "../../utils/supabase/supabaseDataSource";

interface newDataType {
  [key: string]: string | number | null;
}

export const insertUserData = async (newData: newDataType) => {
  return supabaseDataSource.insertData("account", newData);
};
