import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    marginLeft: wp(5),
    alignSelf: "flex-start",
    padding: wp(1),
  },
  imageContainer: {
    paddingVertical: hp(2),
    alignItems: "center",
    marginTop: hp(2),
    width: wp(25),
    alignSelf: "center",
  },
  image: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(12.5),
  },
  editContainer: {
    marginTop: -hp(2),
    marginRight: -wp(15),
  },
  formBuilder: {
    paddingHorizontal: wp(5),
    marginTop: hp(7),
  },
  confirmBtn: {
    marginHorizontal: wp(5),
    marginTop: hp(7),
  },
  confirmBtnText: {
    fontSize: hp(1.8),
    letterSpacing: wp(0.1),
  },
});
export default styles;
