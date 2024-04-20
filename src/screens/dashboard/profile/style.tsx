import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: "center",
    paddingVertical: hp(3.5),
  },
  image: {
    width: wp(28),
    height: wp(28),
    borderRadius: wp(14),
  },
  nameText: {
    fontSize: hp(2),
    fontWeight: "700",
    marginTop: hp(1),
  },
  emailText: {
    fontSize: hp(1.8),
    fontWeight: "700",
    marginTop: hp(0.5),
  },
  itemContainer: {
    marginHorizontal: wp(6),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(2),
    borderBottomWidth: wp(0.2),
    height: hp(7.5),
    borderBottomColor: "#DDD",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileName: {
    fontSize: hp(1.9),
    marginLeft: wp(7),
    width: wp(60),
  },
});

export default styles;
