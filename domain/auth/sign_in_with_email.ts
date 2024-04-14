import * as supbaseDataSource from "../../utils/supabase/supabaseDataSource";

export const signInWithEmail = async (email: string, password: string) => {
  return await supbaseDataSource.emailSignIn(email, password);
};
