import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: wp(5),
    alignItems: "center",
    marginTop: hp(7),
    justifyContent: "space-between",
  },
  searchBar: {
    height: hp(5.5),
    width: wp(80),
  },
  inputStyle: {
    minHeight: hp(5.5),
  },
  badgeStyle: {
    zIndex: 1,
    position: "absolute",
    top: -hp(1.4),
    right: -wp(2),
  },
});

export default styles;
