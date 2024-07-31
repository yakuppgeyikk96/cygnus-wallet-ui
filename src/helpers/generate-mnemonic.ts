import { generateMnemonic } from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english";

export const generateNewMnemonic = async () => {
  const mnemonic = generateMnemonic(wordlist);
  return mnemonic;
};
