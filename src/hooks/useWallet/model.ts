import { Keypair } from "@solana/web3.js";

export type CreateWalletFunc = (mnemonic: string) => Promise<void>;

export type GetAccountInfoFunc = () => Promise<{
  keypair: Keypair | null;
}>;
