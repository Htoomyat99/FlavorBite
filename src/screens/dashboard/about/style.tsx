import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  aboutContainer: {
    paddingHorizontal: wp(5),
    paddingTop: hp(2),
  },
  itemContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: hp(1.9),
    fontWeight: "700",
  },
  paraText: {
    fontSize: hp(1.7),
    textAlign: "justify",
    letterSpacing: wp(0.2),
    marginBottom: hp(2),
  },
  footerText: {
    textAlign: "center",
    fontSize: hp(1.3),
    paddingBottom: hp(3),
  },
});

export default styles;
