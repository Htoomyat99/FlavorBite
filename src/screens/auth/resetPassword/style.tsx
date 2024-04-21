import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  headerText: {
    fontSize: hp(2.5),
    marginTop: hp(3),
    fontWeight: "700",
    marginHorizontal: wp(5),
    letterSpacing: wp(0.2),
  },
  paraText: {
    fontSize: hp(1.8),
    marginHorizontal: wp(5),
    marginTop: hp(2),
    letterSpacing: wp(0.2),
    lineHeight: hp(2.5),
  },
  formBuilder: {
    marginHorizontal: wp(5),
    marginTop: hp(5),
  },
  btnContainer: {
    marginHorizontal: wp(5),
    marginTop: hp(8),
  },
});

export default styles;
