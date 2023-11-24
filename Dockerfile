# Use the official Node image as base
FROM node:latest as build-step

RUN npm install -g @angular/cli
# Set the working directory in the container
RUN mkdir -p /app

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . /app

# Build the Angular app
RUN npm run build --prod

# Expose the port the app runs on
EXPOSE 80

# Start the application
FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/parcial /usr/share/nginx/html