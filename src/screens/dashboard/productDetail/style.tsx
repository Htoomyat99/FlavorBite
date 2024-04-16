import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  clostBtnContainer: {
    paddingLeft: wp(6),
    paddingRight: wp(3),
    paddingVertical: hp(1),
    alignSelf: "flex-start",
  },
  image: {
    width: wp(90),
    height: wp(75),
    alignSelf: "center",
  },
  headerContainer: {
    marginTop: hp(4),
    paddingHorizontal: wp(5),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemName: {
    fontSize: hp(2.3),
    fontWeight: "700",
    width: wp(68),
  },
  itemPrice: {
    fontSize: hp(2.3),
    fontWeight: "700",
  },
  itemDesc: {
    paddingHorizontal: wp(5),
    marginTop: hp(2),
    textAlign: "justify",
    letterSpacing: wp(0.2),
    //   lineHeight: hp(2.5),
  },
  qtyContainer: {
    paddingHorizontal: wp(5),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: hp(3),
  },
  qtyIconContainer: {
    padding: wp(2),
    borderColor: "#DDD",
    borderWidth: wp(0.2),
  },
  qty: {
    marginHorizontal: wp(5),
    fontSize: hp(2),
    fontWeight: "700",
  },
  addCartContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hp(2.7),
    position: "absolute",
    bottom: 0,
    width: wp(100),
  },
  addCartText: {
    fontSize: hp(1.9),
    fontWeight: "700",
    color: "#fff",
  },
});

export default styles;
