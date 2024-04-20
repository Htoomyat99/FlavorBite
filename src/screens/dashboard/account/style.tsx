import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  userInfoHeaderContainer: {
    alignItems: "center",
    marginVertical: hp(4),
  },
  userPhoto: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(12.5),
  },
  editContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    borderRadius: wp(5),
    marginTop: hp(2),
  },
  editText: {
    fontSize: hp(1.6),
    fontWeight: "700",
    marginLeft: wp(2),
  },
  userInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: hp(2.5),
    paddingHorizontal: wp(7),
    borderBottomWidth: wp(0.2),
    borderBottomColor: "#DDD",
  },
  userInfoText: {
    fontSize: hp(1.8),
  },
});

export default styles;
