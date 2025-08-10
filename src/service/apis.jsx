const BASE_URL = import.meta.env.VITE_BASE_URL;

console.log("Environment variables:", {
  VITE_BASE_URL: import.meta.env.VITE_BASE_URL,
  BASE_URL: BASE_URL
});

export const authEndpoits = {
  SIGNUP_API: `${BASE_URL}/api/user/signup`,
  SIGNIN_API: `${BASE_URL}/api/user/signin`,
};

export const BlogEndpoints = {
  GET_BLOGS: `${BASE_URL}/api/blog/blogs`,
  CREATE_BLOG: `${BASE_URL}/api/blog/create`,
  GET_BLOG: `${BASE_URL}/api/blog/blogdel:id`,
};

export const OrderEndpoints = {
  CREATE_ORDER: `${BASE_URL}/api/order/createOrder`,
  CANCEL_ORDER: `${BASE_URL}/api/order/cancel:id`,
};

export const PaymentEndpoints = {
  CREATE_PAYMENT: `${BASE_URL}/api/payment/createPayment`,
  VERIFY_PAYMENT: `${BASE_URL}/api/payment/verifyPayment`,
};

export const PlantsEndpoints = {
  GET_PLANTS: `${BASE_URL}/api/plants/getAllplants`,
  ADD_PLANT: `${BASE_URL}/api/plants/addPlant`,
  GET_PLANT: `${BASE_URL}/api/plants/getplant`,
};
