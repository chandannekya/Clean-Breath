const BASE_URL = import.meta.env.VITE_BASE_URL;

export const authEndpoits = {
  SIGNUP_API: `${BASE_URL}/user/signup`,
  SIGNIN_API: `${BASE_URL}/user/signin`,
};

export const BlogEndpoints = {
  GET_BLOGS: `${BASE_URL}/blog/blogs`,
  CREATE_BLOG: `${BASE_URL}/blog/create`,
  GET_BLOG: `${BASE_URL}/blog/blogdel:id`,
};

export const OrderEndpoints = {
  CREATE_ORDER: `${BASE_URL}/order/createOrder`,
  CANCEL_ORDER: `${BASE_URL}/order/cancel:id`,
};

export const PaymentEndpoints = {
  CREATE_PAYMENT: `${BASE_URL}/payment/createPayment`,
  VERIFY_PAYMENT: `${BASE_URL}/payment/verifyPayment`,
};
