# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.13.1

###############################
# 1. Base image for dependency installation and build
FROM node:${NODE_VERSION}-slim AS builder
WORKDIR /app

# Install build tools for native dependencies (if needed)
RUN apt-get update && apt-get install -y \
    python3 \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy only package.json and package-lock.json for dependency installation
COPY --link package.json ./
# If you use package-lock.json, uncomment the next line
# COPY --link package-lock.json ./

# Install all dependencies (including devDependencies for build)
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# Copy the rest of the application source code (excluding files in .dockerignore)
COPY --link . .

# Generate Prisma client (if using Prisma)
RUN npx prisma generate

# Build the TypeScript app
RUN npm run build

# Remove devDependencies to reduce image size
RUN npm prune --production

###############################
# 2. Production image
FROM node:${NODE_VERSION}-slim AS production
WORKDIR /app

# Copy only production node_modules, built app, and necessary files from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/generated ./generated

# Generate Prisma client (again, in case native binaries are needed for this arch)
RUN npx prisma generate

# Security: create and use a non-root user
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser
USER appuser

# Set environment variables
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Expose the port the app runs on
EXPOSE 3000

# Healthcheck (optional, adjust endpoint as needed)
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node dist/main.js --help > /dev/null || exit 1

# Start the application
CMD ["node", "dist/main"]
