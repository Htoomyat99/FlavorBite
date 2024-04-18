import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: wp(100),
    height: hp(22),
    borderTopWidth: wp(0.3),
    borderColor: "#DDD",
  },
  footerContainer: {
    marginTop: hp(1),
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(5),
    paddingVertical: hp(0.7),
  },
  name: {
    fontSize: hp(1.9),
  },
  price: {
    fontSize: hp(1.9),
    fontWeight: "bold",
  },
  orderContainer: {
    width: wp(90),
    marginHorizontal: wp(5),
    paddingVertical: wp(4.2),
    alignItems: "center",
    marginTop: hp(1.5),
    borderRadius: wp(1.5),
  },
  order: {
    fontSize: hp(1.9),
    fontWeight: "bold",
    color: "#fff",
  },
});

export default styles;
