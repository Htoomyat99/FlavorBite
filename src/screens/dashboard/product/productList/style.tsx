import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    height: hp(82),
    marginTop: hp(3),
    paddingLeft: wp(5),
  },
  productContainer: {
    width: wp(42.5),
    borderRadius: wp(2),
    alignItems: "center",
    marginVertical: hp(1),
    paddingTop: hp(1),
    paddingBottom: hp(2),
    borderWidth: wp(0.6),
    elevation: 1,
  },
  image: {
    width: wp(25),
    height: wp(25),
  },
  nameText: {
    fontSize: hp(1.8),
    marginTop: hp(0.5),
    height: hp(5.5),
    width: wp(35),
    textAlignVertical: "center",
    textAlign: "center",
  },
  priceText: {
    fontSize: hp(1.8),
    marginTop: hp(0.5),
  },
  lottie: {
    width: wp(90),
    height: wp(90),
    alignSelf: "center",
  },
});

export default styles;
