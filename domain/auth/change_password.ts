import { supabase } from "@/utils/supabase/supabase";

export const changeUserPassword = async (
  oldPassword: string,
  newPassword: string
) => {
  //   const { data: verifyData, error: verifyError } = await supabase.rpc(
  //     "verify_user_password",
  //     { password: oldPassword }
  //   );

  //   if (verifyError) {
  //     return {
  //       error: verifyError,
  //       data: verifyData,
  //     };
  //   }

  const { data, error } = await supabase.auth.updateUser({
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
