import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { connection } from "../solana.js";

export const getBalance = async ({ publicKey }) => {
  try {
    const pubKey = new PublicKey(publicKey);
    const balance = await connection.getBalance(pubKey);
    return {
      content: [
        {
          type: "text",
          text: `💰 Balance of ${publicKey} is ${balance / LAMPORTS_PER_SOL} SOL`
        }
      ]
    };
  } catch (err) {
    return {
      content: [
        {
          type: "text",
          text: `❌ Error: ${err.message}`
        }
      ]
    };
  }
};
