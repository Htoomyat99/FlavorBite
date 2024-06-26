interface UserType {
  id: string;
  created_at?: string;
  user_name: string;
  phone: string;
  address: string;
  email: string;
  photo: string;
}

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

interface OrderDataType {
  id: number;
  created_at: string;
  delivery_status: boolean;
  customer_id: string;
  customer_name: string;
  delivery_date: string | null;
  item_amount: number;
}

interface orderDetailDataType {
  created_at: string;
  id: number;
  item_amount: number;
  item_code: string;
  item_image: string;
  item_name: string;
  item_price: number;
  item_qty: number;
  order_id: number;
}

interface ProfileType {
  id: number;
  name: string;
  icon: string;
}

interface UserInfoType {
  id: number;
  label: string;
  value: string;
}

interface passType {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
