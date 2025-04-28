import { PublicKey, LAMPORTS_PER_SOL, SystemProgram, Transaction } from "@solana/web3.js";
import { connection, sender } from "../solana.js";

export const sendSol = async ({ to, amount }) => {
  try {
    const toPubKey = new PublicKey(to);
    const lamports = amount * LAMPORTS_PER_SOL;

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: sender.publicKey,
        toPubkey: toPubKey,
        lamports
      })
    );

    const signature = await connection.sendTransaction(transaction, [sender]);
    await connection.confirmTransaction(signature, 'confirmed');

    return {
      content: [
        {
          type: "text",
          text: `✅ Sent ${amount} SOL to ${to}. Signature: ${signature}`
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
