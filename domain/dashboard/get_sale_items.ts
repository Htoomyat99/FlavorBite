import * as supabaseDataSource from "../../utils/supabase/supabaseDataSource";

export const getSaleItems = async () => {
  return await supabaseDataSource.getAllData("product");
};
