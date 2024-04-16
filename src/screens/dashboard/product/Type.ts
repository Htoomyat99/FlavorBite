interface ProductDataType {
  id: number;
  created_at: string;
  item_code: string;
  item_name: string;
  item_price: number;
  item_description: string;
  item_image: string;
}

interface CartDataType {
  item_code: string;
  item_name: string;
  item_price: number;
  item_qty: number;
  item_description: string;
  item_image: string;
  item_amount: number;
}
