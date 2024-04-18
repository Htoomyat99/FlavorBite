import * as supabaseDataSource from "@/utils/supabase/supabaseDataSource";

interface newDataType {
  [key: string]: string | number | boolean | null;
}

export const insertOrderAndOrderDetail = async (
  orderData: newDataType,
  orderDetailData: newDataType[]
) => {
  return await supabaseDataSource.insertDataAndDataDetail(
    orderData,
    orderDetailData
  );
};
