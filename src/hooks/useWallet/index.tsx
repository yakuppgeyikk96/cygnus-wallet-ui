import { Keypair } from "@solana/web3.js";
import { generateMnemonic, mnemonicToSeed } from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english";

export default function useWallet() {
  const createWallet = async () => {
    try {
      const mnemonic = generateMnemonic(wordlist);

      // Seed phrase'den keypair oluştur
      const seed = await mnemonicToSeed(mnemonic);
      const keypair = Keypair.fromSeed(seed.subarray(0, 32));
      console.log(`Public key: ${keypair.publicKey.toBase58()}`);

      // await saveToChromeStorage(
      //   "cygnus-wallet-publickey",
      //   keypair.publicKey.toBase58()
      // );
    } catch (error) {
      console.error(error);
    }
  };

  return { createWallet };
}
