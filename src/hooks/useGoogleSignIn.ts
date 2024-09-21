import { supabase } from "@/utils/supabase/supabase";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useRouter } from "expo-router";
import { useStore } from "../store/store";
import { useState } from "react";
import { insertUserData } from "@/domain/auth/insert_user_data";
import { getUserByFilter } from "@/domain/auth/get_user_by_filter";

const useGoogleSignIn = () => {
  const router = useRouter();
  const { updateUserId, updateUserData } = useStore();
  const [loading, setLoading] = useState(false);
  const [errVisible, setErrVisible] = useState({ status: false, message: "" });

  // GoogleSignin.configure({
  //   scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  //   webClientId:
  //     "516212627067-4avdasng23iu695d34mpnoic7t9did92.apps.googleusercontent.com",
  // });

  const signInWithGoogle = async () => {
    // try {
    //   await GoogleSignin.hasPlayServices();
    //   const userInfo = await GoogleSignin.signIn();
    //   //check userInfo after googleSignIn
    //   if (userInfo.idToken) {
    //     setLoading(true);
    //     const { data: googleData, error } =
    //       await supabase.auth.signInWithIdToken({
    //         provider: "google",
    //         token: userInfo.idToken,
    //       });
    //     if (error) {
    //       setErrVisible({ status: true, message: error.message });
    //       setLoading(false);
    //       return;
    //     }
    //     // check googleUser already or not in supabase
    //     const { data, error: supabaseError } = await getUserByFilter({
    //       colValue: googleData?.user?.id,
    //     });
    //     if (supabaseError) {
    //       setErrVisible({ status: true, message: supabaseError.message });
    //       setLoading(false);
    //       return;
    //     }
    //     // not in supabase table
    //     if (data && data.length === 0) {
    //       let googleSignInUserData = googleData?.user?.user_metadata;
    //       let userInfo: any = {
    //         id: googleData?.user?.id,
    //         user_name: googleSignInUserData?.full_name,
    //         phone: "",
    //         address: "",
    //         photo: googleSignInUserData?.picture,
    //         email: googleSignInUserData?.email,
    //       };
    //       const { data, error } = await insertUserData(userInfo);
    //       if (error) {
    //         setErrVisible({ status: true, message: error.message });
    //         setLoading(false);
    //         return;
    //       }
    //       updateUserData(data[0]);
    //     }
    //     setLoading(false);
    //     updateUserId(googleData?.user?.id);
    //     router.push("/(tabs)/home");
    //   } else {
    //     setErrVisible({ status: true, message: "no ID token present!" });
    //     setLoading(false);
    //   }
    // } catch (error: any) {
    //   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //     // user cancelled the login flow
    //     console.log(error.code);
    //   } else if (error.code === statusCodes.IN_PROGRESS) {
    //     // operation (e.g. sign in) is in progress already
    //     console.log(error.code);
    //   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //     // play services not available or outdated
    //     console.log(error.code);
    //   } else {
    //     setErrVisible({ status: true, message: error.message });
    //   }
    // }
  };

  return { signInWithGoogle, errVisible, loading, setErrVisible, setLoading };
};

export default useGoogleSignIn;
