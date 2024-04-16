import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#fff",
    alignSelf: "center",
    width: wp(70),
    borderRadius: wp(1),
    overflow: "hidden",
  },
  headerText: {
    fontSize: hp(2),
    alignSelf: "center",
    marginVertical: hp(2),
  },
  langText: {
    paddingHorizontal: wp(5),
    paddingVertical: hp(1.8),
  },
});

export default styles;
