import * as supbaseDataSource from "../../utils/supabase/supabaseDataSource";

export const signUpWithEmail = async (email: string, password: string) => {
  return await supbaseDataSource.emailSignUp(email, password);
};
