# Stage 1: Build
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Build the Next.js app
RUN pnpm build

# Stage 2: Production image
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Install only production dependencies
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

# Copy built files and public assets from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Only copy next.config.js if it exists
# COPY --from=builder /app/next.config.js ./

# Expose port
EXPOSE 3000

# Start the Next.js server
CMD ["pnpm", "start"]
