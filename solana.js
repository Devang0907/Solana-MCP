import { Connection, clusterApiUrl, Keypair } from "@solana/web3.js";
import  bs58  from "bs58";
import dotenv from 'dotenv';
dotenv.config();

export const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
export const sender = Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY));

