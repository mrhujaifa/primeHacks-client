import { httpClient } from "@/lib/Axios/axios";

type CheckOutResponse = {
  checkoutUrl: string;
};
export const createCheckoutSession = async (plan: "MONTHLY" | "YEARLY") => {
  try {
    const res = await httpClient.post<CheckOutResponse>(
      "/payments/create-checkout-session",
      {
        plan,
      },
    );

    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
