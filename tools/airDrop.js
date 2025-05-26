import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { connection } from "../solana.js";

export const airdropSOL = async ({ publicKey, amount = 1 }) => {
  try {
    const pubKey = new PublicKey(publicKey);
    const signature = await connection.requestAirdrop(pubKey, amount * LAMPORTS_PER_SOL);

    // Wait for confirmation
    await connection.confirmTransaction(signature, "confirmed");

    return {
      content: [
        {
          type: "text",
          text: `✅ Airdropped ${amount} SOL to ${publicKey}. Tx Signature: ${signature}`
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
