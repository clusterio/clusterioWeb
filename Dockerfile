FROM node:12 AS builder

WORKDIR /usr/src/app

# Add package.json and run npm install
# Its important to copy in package.json first to avoid caching issues
COPY package*.json ./
RUN npm ci --only=production

# Copy rest of the project and build
COPY . .
RUN npm run build

# Create new container using the tiny node-alpine linux image to use for our deployment
FROM node:12-alpine

# Open a port in the firewall
EXPOSE 8080

WORKDIR /usr/src/app
# Copy package.json so 'npm start' still works
COPY --from=builder /usr/src/app/package.json ./
# Copy our build result
COPY --from=builder /usr/src/app/build build

CMD [ "npm", "start" ]
