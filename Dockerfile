# Use Node.js LTS image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port if needed (not strictly required for stdio MCP, but for future HTTP use)
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]