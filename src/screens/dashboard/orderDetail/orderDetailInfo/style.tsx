import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(7),
    borderRadius: wp(2),
    marginVertical: hp(2.5),
    paddingBottom: hp(2),
  },
  headerContainer: {
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  orderInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  orderInfo: {
    fontSize: hp(1.6),
    fontWeight: "700",
    marginLeft: wp(2),
  },
  statusText: {
    fontSize: hp(1.6),
    fontStyle: "italic",
    fontWeight: "700",
  },
  idText: {
    fontSize: hp(1.6),
    fontWeight: "700",
    paddingLeft: wp(10),
    paddingBottom: wp(0.3),
  },
});

export default styles;
