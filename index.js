import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { getBalance } from "./tools/getBalance.js";
import { sendSol } from "./tools/sendSol.js";
import { airdropSOL } from "./tools/airDrop.js";

const server = new McpServer({
    name: "SolanaBot",
    version: "1.0.0",
});

// Tool: Get SOL balance
server.tool(
    "getBalance",
    { publicKey: z.string() },
    getBalance
);

// Tool: Send SOL
server.tool(
    "sendSol",
    {
        to: z.string(),
        amount: z.number().positive()
    },
    sendSol
);

// Tool: Air Drop SOL
server.tool(
  "airdropSOL",
  {
    publicKey: z.string(),
    amount: z.number().positive().default(1)
  },
  airdropSOL
);

// Start MCP server
const transport = new StdioServerTransport();
await server.connect(transport);
