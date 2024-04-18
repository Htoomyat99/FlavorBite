import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: wp(40),
    height: wp(40),
    marginBottom: hp(3),
  },
  emptyText: {
    fontSize: hp(2),
  },

  //order
  mainContainer: {
    marginTop: hp(1.5),
    marginHorizontal: wp(5),
    paddingHorizontal: wp(5),
    paddingVertical: hp(1.5),
    borderRadius: wp(2.5),
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.9,
    shadowRadius: 1,
  },
  orderContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderText: {
    fontSize: hp(1.9),
    fontWeight: "700",
  },
  complete: {
    fontSize: hp(1.8),
    fontWeight: "700",
    fontStyle: "italic",
    height: wp(10),
    textAlignVertical: "center",
  },
  amount: {
    fontSize: hp(1.8),
    marginBottom: hp(0.5),
  },
  pendingLottie: {
    width: wp(10),
    height: wp(10),
  },
});

export default styles;
