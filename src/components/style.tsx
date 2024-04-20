import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  cameraMainContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
    marginTop: hp(4.5),
  },
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp(2),
    paddingHorizontal: wp(3),
  },
});

export default styles;
