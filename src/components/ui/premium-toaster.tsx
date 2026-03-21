"use client";

import { Toaster, ToastBar } from "react-hot-toast";

export default function PremiumToaster() {
  return (
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{
        top: 24,
      }}
      toastOptions={{
        duration: 3500,
        removeDelay: 500,
        style: {
          background:
            "linear-gradient(135deg, rgba(7,16,35,0.96), rgba(17,24,39,0.96))",
          color: "#E5EEFF",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "18px",
          padding: "14px 16px",
          boxShadow:
            "0 10px 35px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.03) inset",
          backdropFilter: "blur(14px)",
          fontSize: "14px",
          fontWeight: 500,
          minWidth: "320px",
          maxWidth: "420px",
        },
        success: {
          duration: 3000,
          iconTheme: {
            primary: "#22c55e",
            secondary: "#ffffff",
          },
          style: {
            background:
              "linear-gradient(135deg, rgba(6,28,20,0.97), rgba(10,38,31,0.97))",
            color: "#ECFDF5",
            border: "1px solid rgba(34,197,94,0.18)",
          },
        },
        error: {
          duration: 4000,
          iconTheme: {
            primary: "#ef4444",
            secondary: "#ffffff",
          },
          style: {
            background:
              "linear-gradient(135deg, rgba(42,12,18,0.97), rgba(56,14,23,0.97))",
            color: "#FEF2F2",
            border: "1px solid rgba(239,68,68,0.18)",
          },
        },
        loading: {
          duration: Infinity,
          iconTheme: {
            primary: "#60a5fa",
            secondary: "#ffffff",
          },
          style: {
            background:
              "linear-gradient(135deg, rgba(17,24,39,0.97), rgba(30,41,59,0.97))",
            color: "#EFF6FF",
            border: "1px solid rgba(96,165,250,0.18)",
          },
        },
      }}
    >
      {(t) => (
        <ToastBar
          toast={t}
          style={{
            ...t.style,
            animation: t.visible
              ? "custom-enter 0.28s ease"
              : "custom-exit 0.22s ease forwards",
          }}
        />
      )}
    </Toaster>
  );
}
