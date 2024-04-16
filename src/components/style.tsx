import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  //loadingView
  indicatorContainer: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "rgba(52, 52, 52, 0.2)",
    borderRadius: wp(1),
    marginBottom: hp(20),
  },
  otpLottie: {
    width: wp(35),
    height: wp(22),
    alignSelf: "center",
  },

  //errorAlertModal
  modalContainer: {
    backgroundColor: "#fff",
    alignSelf: "center",
    width: wp(70),
    borderRadius: wp(2),
  },
  errorContainer: {
    alignItems: "center",
    marginTop: hp(3),
  },
  errHeaderText: {
    fontSize: hp(2),
    alignSelf: "center",
    marginTop: hp(0.5),
  },
  errText: {
    fontSize: hp(1.8),
    alignSelf: "center",
    textAlign: "center",
    marginTop: hp(2.5),
    marginHorizontal: wp(5),
  },
  btnContainer: {
    marginTop: hp(3.5),
    alignItems: "center",
    borderTopWidth: wp(0.3),
    borderColor: "#DDD",
  },
  btnText: {
    fontSize: hp(2),
    paddingVertical: wp(3),
  },
});

export default styles;
