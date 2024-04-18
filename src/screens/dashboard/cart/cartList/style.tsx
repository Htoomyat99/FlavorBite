import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: wp(5),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: hp(1.5),
    borderBottomWidth: wp(0.3),
    borderBottomColor: "#DDD",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: wp(23),
    height: wp(23),
    resizeMode: "contain",
    marginRight: wp(5),
    borderRadius: wp(1),
  },
  itemAndQtyContainer: {
    height: wp(20),
    justifyContent: "space-between",
    width: wp(45),
    alignItems: "flex-start",
  },
  name: {
    fontSize: hp(1.8),
  },
  qtyContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: wp(0.2),
    borderRadius: wp(0.7),
  },
  iconContainer: {
    paddingVertical: wp(0.6),
    paddingHorizontal: wp(1.2),
  },
  qty: {
    fontSize: hp(1.9),
    marginHorizontal: wp(0.8),
    width: wp(5),
    textAlign: "center",
  },
  removeAndpriceContainer: {
    justifyContent: "space-between",
    height: wp(21),
  },
  remove: {
    fontSize: hp(1.7),
    fontStyle: "italic",
    textDecorationLine: "underline",
  },

  //cartEmpty
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    width: wp(40),
    height: wp(40),
    marginBottom: hp(3),
  },
  text: {
    fontSize: hp(2),
  },
});

export default styles;
