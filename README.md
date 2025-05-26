# SolanaBot

SolanaBot is a backend application that provides tools to interact with the Solana blockchain. It allows users to check SOL balances and send SOL to other accounts using the Model Context Protocol (MCP).

## Features

- **Get Balance**: Retrieve the SOL balance of a given public key.
- **Send SOL**: Transfer SOL from the sender's account to a specified recipient.
- **Airdrop SOL**: Airdrop some solana to given public key.

## Required
- A Solana wallet.
- Claude Desktop

## setup
- Create a .env file in the root directory.
- Add your Solana wallet private key in the following format:
``` PRIVATE_KEY= Your_key```
- Edit claude_desktop_config as :
``` {
  "mcpServers": {
    "solana": {
      "command": PATH_OF_NODE,
      "args": [
        PATH_OF_INDEX.JS
      ]
    }
  }
}
```

## Send solana:
![text](https://github.com/user-attachments/assets/3ae73f68-af9d-41ab-b95c-bf9031a47c71)


## Get Balance :
![text](https://github.com/user-attachments/assets/a47eb931-c38b-4c8f-ade3-53d96ce2b09d)
