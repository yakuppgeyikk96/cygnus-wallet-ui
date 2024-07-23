import ICygnusWallet from "../extension-scripts/ICygnusWallet";

export {};

declare global {
  interface Window {
    cygnus?: {
      solana?: ICygnusWallet;
    };
  }
}
