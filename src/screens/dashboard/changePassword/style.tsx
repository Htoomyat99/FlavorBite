import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fomrBuilder: {
    paddingHorizontal: wp(5),
    marginTop: hp(5),
  },
  btnContainer: {
    marginHorizontal: wp(5),
    marginTop: hp(5),
  },
});

export default styles;
