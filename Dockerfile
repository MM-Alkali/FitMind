# Stage 1: Build the server
FROM node:16-alpine as server-builder

WORKDIR /app/server

COPY server/package.json server/package-lock.json ./
RUN npm ci

COPY server .
RUN npm run build

# Stage 2: Build the client
FROM node:16-alpine as client-builder

WORKDIR /app/client

COPY client/package.json client/package-lock.json ./
RUN npm ci

COPY client .

# Stage 3: Create the final image
FROM node:16-alpine

WORKDIR /app

# Copy the built server files
COPY --from=server-builder /app/server/dist ./server/dist
COPY --from=server-builder /app/server/package.json /app/server/package-lock.json ./server/

# Install server dependencies
WORKDIR /app/server
RUN npm ci --only=production

# Copy the client files
COPY --from=client-builder /app/client ./client

# Install client dependencies
WORKDIR /app/client
RUN npm ci --only=production

# Expose the server and client ports
EXPOSE 3000
EXPOSE 3001

# Start the server and client
CMD ["sh", "-c", "cd server && npm run dev & cd ../client && npm install && npm start"]
