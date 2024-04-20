import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./style";
import { Appbar, useTheme } from "react-native-paper";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useLocale } from "@/src/hooks/useLocale";

const About = ({ backAction }: { backAction: () => void }) => {
  const locale = useLocale();
  const theme = useTheme();

  const data = [
    { id: 1, header: locale.intro, para: locale.introPara },
    { id: 2, header: locale.headerOne, para: locale.headerOnePara },
    { id: 3, header: locale.headerTwo, para: locale.headerTwoPara },
    { id: 4, header: locale.headerThree, para: locale.headerThreePara },
    { id: 5, header: locale.headerFour, para: locale.headerFourPara },
  ];
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Appbar.Header style={{ backgroundColor: theme.colors.elevation.level1 }}>
        <Appbar.BackAction onPress={backAction} />
        <Appbar.Content title="About" titleStyle={{ fontSize: hp(2.5) }} />
      </Appbar.Header>

      <ScrollView style={styles.aboutContainer}>
        {data.map((item) => {
          return (
            <View key={item.id} style={styles.itemContainer}>
              <Text
                style={[
                  styles.headerText,
                  { marginBottom: item.id === 1 ? hp(2) : hp(0.5) },
                ]}
              >
                {item.header}
              </Text>
              <Text style={styles.paraText}>{item.para}</Text>
            </View>
          );
        })}

        <Text style={[styles.footerText, { color: theme.colors.primary }]}>
          {locale.aboutPolicy}
        </Text>
      </ScrollView>
    </View>
  );
};

export default About;
