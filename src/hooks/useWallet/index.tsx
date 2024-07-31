import { Keypair } from "@solana/web3.js";
import { mnemonicToSeed } from "@scure/bip39";
import { CreateWalletFunc, GetAccountInfoFunc } from "./model";
import bs58 from "bs58";

export default function useWallet() {
  const getAccountInfo: GetAccountInfoFunc = async () => {
    try {
      chrome.storage.sync.get("cygnus-wallet-data", (result) => {
        console.log(result);
      });
      return Promise.resolve({ keypair: null });
    } catch (error) {
      console.error(error);
      return Promise.resolve({ keypair: null });
    }
  };

  const createWallet: CreateWalletFunc = async (mnemonic: string) => {
    try {
      // Generate a keypair from the mnemonic
      const seed = await mnemonicToSeed(mnemonic);
      const keypair = Keypair.fromSeed(seed.subarray(0, 32));
      console.log(`Public key: ${keypair.publicKey.toBase58()}`);

      const publicKey = keypair.publicKey.toBase58();
      const secretKey = bs58.encode(keypair.secretKey);

      const walletData = JSON.stringify({
        publicKey,
        secretKey,
      });

      chrome.storage.sync.set({ "cygnus-wallet-data": walletData }, () => {});
    } catch (error) {
      console.error(error);
    }
  };

  return { createWallet, getAccountInfo };
}
