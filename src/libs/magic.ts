import { Magic } from "magic-sdk";

// Initialize the Magic instance
export const magic = new Magic("pk_live_873D54EC94B607D9", {
  network: {
    rpcUrl: "https://rpc-mumbai.maticvigil.com/",
    chainId: 80001,
  },
});
