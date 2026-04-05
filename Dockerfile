# # Stage 1: Build
# FROM node:20-alpine AS builder

# # Set working directory
# WORKDIR /app

# # Copy package files
# COPY package.json package-lock.json ./

# # Install dependencies
# RUN npm ci

# # Copy the rest of the project
# COPY . .

# # Build the Next.js app
# RUN npm run build

# # Stage 2: Production image
# FROM node:20-alpine AS runner

# # Set working directory
# WORKDIR /app

# # Install only production dependencies
# COPY package.json package-lock.json ./
# RUN npm ci --omit=dev

# # Copy built files and public assets from builder
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public

# # Expose port
# EXPOSE 3000

# # Start the Next.js server
# CMD ["npm", "start"]