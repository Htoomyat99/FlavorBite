import * as supabaseDataSource from "@/utils/supabase/supabaseDataSource";

export const getOrderDetailItem = async (colValue: number) => {
  return await supabaseDataSource.getAllDataByFilter(
    "order_detail",
    "order_id",
    colValue
  );
};
