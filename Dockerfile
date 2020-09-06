
FROM node:12
WORKDIR /usr/src/app

# Add package.json and run npm install
# Its important to copy in package.json first to avoid caching issues
COPY package*.json ./
RUN npm ci

# Copy rest of the project and build
COPY . .

# Open a port in the firewall
EXPOSE 3000

CMD [ "npm", "run", "dev" ]
