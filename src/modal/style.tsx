import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  //languageModal
  modalContainer: {
    alignSelf: "center",
    width: wp(70),
    borderRadius: wp(1),
    overflow: "hidden",
  },
  headerText: {
    fontSize: hp(2),
    alignSelf: "center",
    marginVertical: hp(2),
  },
  langContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  langText: {
    paddingLeft: wp(5),
    paddingVertical: hp(1.8),
  },
  tickIcon: {
    paddingRight: wp(5),
  },

  //loadingModal
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

  //err & confrim Modals
  errModalContainer: {
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
  confirmFooterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(2.5),
    borderTopWidth: wp(0.2),
    borderTopColor: "#DDD",
    overflow: "hidden",
  },
  confirmBtnText: {
    fontSize: hp(2),
    paddingVertical: wp(3),
    width: wp(35),
    textAlign: "center",
    overflow: "hidden",
  },

  //cameraModal
  cameraMainContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  cameraContainer: {
    overflow: "hidden",
    borderRadius: wp(2),
    paddingHorizontal: wp(5),
    paddingVertical: hp(3),
  },
  openText: {
    fontSize: hp(1.8),
    textAlign: "center",
    marginBottom: hp(3),
  },
  cameraBtnContainer: {
    paddingVertical: wp(4),
    paddingHorizontal: wp(4),
    borderRadius: wp(2),
    marginHorizontal: wp(5),
    // borderColor: "#DDD",
    // borderWidth: wp(0.2),
  },
});

export default styles;
