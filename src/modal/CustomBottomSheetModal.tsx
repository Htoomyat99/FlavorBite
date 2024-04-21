import React, { ReactNode } from "react";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { useTheme } from "react-native-paper";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { SharedValue } from "react-native-reanimated";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

interface Props {
  bottomSheetModalRef: React.Ref<BottomSheetModalMethods> | undefined;
  snapPoints:
    | (string | number)[]
    | SharedValue<(string | number)[]>
    | Readonly<(string | number)[] | SharedValue<(string | number)[]>>
    | undefined;
  childern: ReactNode;
}

const CustomBottomSheetModal = (props: Props) => {
  const theme = useTheme();

  return (
    <BottomSheetModal
      backdropComponent={(props) => (
        <BottomSheetBackdrop {...props} onPress={() => {}} />
      )}
      containerStyle={{ backgroundColor: "rgba(0,0,0,0.2)" }}
      ref={props.bottomSheetModalRef}
      index={1}
      snapPoints={props.snapPoints}
      enableContentPanningGesture={false}
      backgroundStyle={{
        backgroundColor: theme.colors.elevation.level3,
        borderTopRightRadius: wp(10),
        borderTopLeftRadius: wp(10),
      }}
    >
      {props.childern}
    </BottomSheetModal>
  );
};

export default CustomBottomSheetModal;
