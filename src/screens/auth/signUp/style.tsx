import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    marginTop: hp(7),
    paddingHorizontal: wp(7),
  },
  welcomeText: {
    fontSize: hp(4),
    marginBottom: hp(0.5),
  },
  para: {
    fontSize: hp(1.6),
    lineHeight: hp(3),
    letterSpacing: wp(0.5),
  },
  formBuilderContainer: {
    marginTop: hp(5),
  },
  signUpbtn: {
    height: hp(5.5),
    marginTop: hp(5),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp(7),
  },
  btnText: {
    fontSize: hp(1.6),
  },
  continueText: {
    fontSize: hp(1.8),
    marginTop: hp(5),
    textAlign: "center",
  },
  btnContainer: {
    marginTop: hp(3),
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(10),
  },
  footerQue: {
    fontSize: hp(1.8),
    marginRight: wp(1),
  },
  signInText: {
    fontSize: hp(1.8),
  },
});

export default styles;
