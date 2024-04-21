import React from "react";
import About from "@/src/screens/dashboard/about/About";
import { useRouter } from "expo-router";

const about = () => {
  const router = useRouter();

  const backAction = () => {
    router.back();
  };

  return <About backAction={backAction} />;
};

export default about;
