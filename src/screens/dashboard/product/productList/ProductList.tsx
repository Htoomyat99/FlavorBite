import {
  View,
  Alert,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import styles from "./style";
import { useTheme, Text, Badge } from "react-native-paper";
import { getSaleItems } from "@/domain/dashboard/get_sale_items";
import { useStore } from "@/src/store/store";
import { useLocale } from "@/src/hooks/useLocale";
import AnimatedLottieView from "lottie-react-native";
import LoadingView from "@/src/components/LoadingView";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

interface Props {
  goProductDetail: (item: ProductDataType) => void;
}

const ProductList = ({ goProductDetail }: Props) => {
  const theme = useTheme();
  const locale = useLocale();

  const { cartItem } = useStore();

  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState<ProductDataType[]>([]);

  useEffect(() => {
    fetchSaleItems();
  }, []);

  const fetchSaleItems = async () => {
    setLoading(true);
    const { data, error } = await getSaleItems();

    if (error) {
      Alert.alert("Error", error.message);
      setLoading(false);
      return;
    }

    setProductData(data);
    setLoading(false);
  };

  const renderItem = (item: ProductDataType) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => goProductDetail(item)}
        style={[
          styles.productContainer,
          {
            backgroundColor: theme.colors.primaryContainer,
            borderColor: cartItem.some(
              (data) => data.item_code === item.item_code
            )
              ? "#ffd700"
              : theme.colors.primaryContainer,
          },
        ]}
      >
        {cartItem.map(
          (data) =>
            data.item_code === item.item_code && (
              <Badge
                key={data.item_code}
                style={{ position: "absolute", top: -wp(2) }}
                size={wp(9)}
              >
                {data.item_qty}
              </Badge>
            )
        )}
        <Image style={styles.image} source={{ uri: item.item_image }} />
        <Text style={styles.nameText}>{item.item_name}</Text>
        <Text style={styles.priceText}>
          {item.item_price} {locale.currency}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {productData.length === 0 && !loading ? (
        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}
          style={styles.container}
        >
          <AnimatedLottieView
            loop
            autoPlay
            source={require("@/assets/animations/noDataFound.json")}
            style={styles.lottie}
          />
        </TouchableWithoutFeedback>
      ) : (
        <FlashList
          numColumns={2}
          data={productData}
          extraData={false}
          estimatedItemSize={100}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => renderItem(item)}
          refreshControl={
            <RefreshControl
              onRefresh={() => fetchSaleItems()}
              refreshing={loading}
            />
          }
        />
      )}

      {loading && <LoadingView />}
    </View>
  );
};

export default ProductList;
