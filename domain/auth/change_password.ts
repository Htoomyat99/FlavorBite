import { supabase } from "@/utils/supabase/supabase";

export const changeUserPassword = async (
  newPassword: string,
  email?: string
) => {
  const { data, error } = await supabase.auth.updateUser({
    email: email,
    password: newPassword,
  });

  if (error) {
    return {
      error: error,
      data: data,
    };
  }

  return {
    data: data,
    error: error,
  };
};
