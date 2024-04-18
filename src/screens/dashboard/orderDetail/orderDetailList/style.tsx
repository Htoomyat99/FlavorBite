import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(3.5),
    paddingTop: hp(1.5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: wp(22),
    height: wp(22),
    borderRadius: wp(1.5),
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    height: wp(20),
    width: wp(53),
  },
  nameText: {
    fontSize: hp(1.8),
    fontWeight: "700",
  },

  //footer
  footerContainer: {
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  orderTotalHeader: {
    fontSize: hp(1.6),
    fontWeight: "700",
    marginTop: hp(1.5),
    marginBottom: hp(0.7),
    marginHorizontal: wp(7),
  },
  orderTotalContainer: {
    marginHorizontal: wp(7),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: wp(0.5),
  },
  subTotal: {
    fontSize: hp(1.6),
    fontWeight: "700",
    color: "#999",
  },
});

export default styles;
