# Use an official Node.js runtime as the base image
FROM node:26-slim

# Set the working directory inside the container
WORKDIR /usr/src/app

# Enable Corepack to pin the pnpm version from package.json
RUN corepack enable

# Copy package manifests and lockfile to the container
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install project dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code to the container
COPY . .

# Expose a port (if your application listens on a specific port)
EXPOSE 3000

# Command to run when the container starts
CMD [ "pnpm", "start" ]