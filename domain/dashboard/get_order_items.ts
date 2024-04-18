import * as supabaseDataSource from "@/utils/supabase/supabaseDataSource";

export const getOrderItems = async (colValue: string) => {
  return await supabaseDataSource.getAllDataByFilter(
    "order",
    "customer_id",
    colValue
  );
};
