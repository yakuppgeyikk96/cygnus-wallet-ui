/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Transaction,
  VersionedTransaction,
  SendOptions,
  TransactionSignature,
  Keypair,
  PublicKey,
} from "@solana/web3.js";

interface ICygnusWallet {
  isCygnus?: boolean;
  publicKey?: { toBytes(): Uint8Array };
  isConnected: boolean;
  signTransaction<T extends Transaction | VersionedTransaction>(
    transaction: T
  ): Promise<T>;
  signAllTransactions<T extends Transaction | VersionedTransaction>(
    transactions: T[]
  ): Promise<T[]>;
  signAndSendTransaction<T extends Transaction | VersionedTransaction>(
    transaction: T,
    options?: SendOptions
  ): Promise<{ signature: TransactionSignature }>;
  signMessage(message: Uint8Array): Promise<{ signature: Uint8Array }>;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}

class CygnusWallet implements ICygnusWallet {
  isCygnus?: boolean | undefined;
  publicKey?: { toBytes(): Uint8Array } | undefined;
  isConnected: boolean = false;

  constructor() {
    this.isCygnus = true;
  }

  signTransaction<T extends Transaction | VersionedTransaction>(
    transaction: T
  ): Promise<T> {
    console.log(transaction);
    throw new Error("Method not implemented.");
  }
  signAllTransactions<T extends Transaction | VersionedTransaction>(
    transactions: T[]
  ): Promise<T[]> {
    console.log(transactions);
    throw new Error("Method not implemented.");
  }
  signAndSendTransaction<T extends Transaction | VersionedTransaction>(
    transaction: T,
    options?: SendOptions
  ): Promise<{ signature: TransactionSignature }> {
    console.log(transaction, options);
    throw new Error("Method not implemented.");
  }
  signMessage(message: Uint8Array): Promise<{ signature: Uint8Array }> {
    console.log(message);
    throw new Error("Method not implemented.");
  }
  connect(): Promise<void> {
    this.isConnected = true;
    this.publicKey = new PublicKey(Keypair.generate().publicKey);
    console.log(this.publicKey);
    return Promise.resolve();
  }
  disconnect(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

function injectCygnus() {
  const descriptor = Object.getOwnPropertyDescriptor(window, "cygnus");

  if (descriptor && !descriptor.configurable) {
    console.warn(`Cannot redefine non-configurable property 'test'.`);
  }

  console.log("Injecting cygnus wallet...");

  Object.defineProperty(window, "cygnus", {
    value: {
      solana: new CygnusWallet(),
    },
    writable: false,
  });
}

injectCygnus();
