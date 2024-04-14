import * as supbaseDataSource from "../../utils/supabase/supabaseDataSource";

export const getCurrentSession = async () => {
  return await supbaseDataSource.getCurrentSession();
};
