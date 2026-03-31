import { httpClient } from "@/lib/Axios/axios";

type CheckOutResponse = {
  checkoutUrl: string;
};

//* create checkout session
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

//* verify payment session

export const verifyPaymentSession = async (sessionId: string) => {
  try {
    const res = await httpClient.get(`/payments/verify-session/${sessionId}`);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
