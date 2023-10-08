import { Magic } from "magic-sdk";

// Initialize the Magic instance
export const magic = new Magic("YOUR_API_KEY", {
  network: {
    rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/demo",
    chainId: 11155111,
  },
});
