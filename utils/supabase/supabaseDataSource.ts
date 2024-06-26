import { supabase } from "./supabase";

interface newDataType {
  [key: string]: string | number | boolean | null;
}

export const emailSignUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    return {
      error: error,
      data: data,
    };
  }

  return {
    error: error,
    data: data,
  };
};

export const emailSignIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    return {
      error: error,
      data: data,
    };
  }

  return {
    data: data,
    error: error,
  };
};

export const getCurrentSession = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    return {
      error: error,
      data: data,
    };
  }

  return {
    data: data,
    error: error,
  };
};

export const emailSignOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    return {
      data: null,
      error: error,
    };
  }

  return {
    data: null,
    error: null,
  };
};

export const insertData = async (tableName: string, newData: newDataType) => {
  const { data, error } = await supabase
    .from(tableName)
    .insert(newData)
    .select();

  if (error) {
    return {
      error: error,
      data: data,
    };
  }

  return {
    data: data,
    error: error,
  };
};

export const insertManyData = async (
  tableName: string,
  newData: newDataType[]
) => {
  const { data, error } = await supabase
    .from(tableName)
    .insert(newData)
    .select();

  if (error) {
    return {
      error: error,
      data: data,
    };
  }

  return {
    data: data,
    error: error,
  };
};

export const updateData = async (
  tableName: string,
  newData: newDataType,
  eq: { colName: string; colValue: string | undefined | null }
) => {
  const { data, error } = await supabase
    .from(tableName)
    .update(newData)
    .eq(eq.colName, eq.colValue)
    .select();

  if (error) {
    return {
      data: data,
      error: error,
    };
  }

  return {
    data: data,
    error: error,
  };
};

export const getAllData = async (tableName: string) => {
  const { data, error } = await supabase.from(tableName).select("*");

  if (error) {
    return {
      data: data,
      error: error,
    };
  }

  return {
    data: data,
    error: error,
  };
};

export const insertDataAndDataDetail = async (
  orderData: newDataType,
  orderDetailData: newDataType[]
) => {
  const { data: order, error: orderError } = await supabase
    .from("order")
    .insert(orderData)
    .select("id")
    .single();

  if (orderError) {
    return {
      data: order,
      error: orderError,
    };
  }

  const { data: orderDetail, error: orderDetailError } = await supabase
    .from("order_detail")
    .insert(
      orderDetailData.map((item) => ({
        ...item,
        order_id: order?.id,
      }))
    )
    .select();

  if (orderDetailError) {
    return {
      error: orderDetailError,
      data: orderDetail,
    };
  }

  return {
    data: orderDetail,
    error: orderDetailError,
  };
};

export const getAllDataByFilter = async (
  tableName: string,
  colName: string,
  colValue: string | number
) => {
  const { data, error } = await supabase
    .from(tableName)
    .select()
    .eq(colName, colValue);

  if (error) {
    return {
      error: error,
      data: data,
    };
  }

  return {
    data: data,
    error: error,
  };
};

export const changeUserInfo = async (newPassword: string) => {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    return {
      error: error,
      data: data,
    };
  }

  return {
    data: data,
    error: error,
  };
};
