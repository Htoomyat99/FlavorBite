import * as supbaseDataSource from "../../utils/supabase/supabaseDataSource";

export const signOutWithEmail = async () => {
  return await supbaseDataSource.emailSignOut();
};
