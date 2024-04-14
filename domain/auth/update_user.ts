import * as supabaseDataSource from "../../utils/supabase/supabaseDataSource";

interface UpdateDataType {
  [key: string]: string | number;
}

export const updateUserData = async (
  newData: UpdateDataType,
  userId: string | undefined | null
) => {
  return await supabaseDataSource.updateData("account", newData, {
    colName: "id",
    colValue: userId,
  });
};
